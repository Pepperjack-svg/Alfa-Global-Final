"""
Alfa Global Group — FastAPI application entry point.

Import order is intentional and must not be changed:
  1. load_dotenv()   — populates os.environ from .env BEFORE any other module reads it.
  2. database        — opens the single shared MongoDB connection pool.
  3. routes          — each route imports `db` from database; must come after step 2.
"""

from dotenv import load_dotenv
from pathlib import Path

# ── Step 1: Populate environment ───────────────────────────────────────────────
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# ── Step 2: Standard library + third-party (env vars now available) ────────────
import os
import logging

from fastapi import FastAPI, APIRouter, Request
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler

from limiter import limiter
from database import close_connection

# ── Step 3: Route modules (each imports `db` from database) ────────────────────
from routes import contact, newsletter, testimonials, insights

# ── Logging ────────────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


# ── Security headers middleware (ISO 27001 A.13.1 / A.14.1) ───────────────────
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """Adds hardened HTTP security response headers to every response."""

    async def dispatch(self, request: Request, call_next) -> Response:
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        # Remove server fingerprinting header added by uvicorn
        response.headers.pop("server", None)
        return response


# ── FastAPI app ────────────────────────────────────────────────────────────────
app = FastAPI(
    title="Alfa Global Group API",
    version="1.0.0",
    # Disable interactive API docs in production to reduce attack surface.
    # Set ENABLE_DOCS=1 during local development if needed.
    docs_url="/docs" if os.environ.get("ENABLE_DOCS") == "1" else None,
    redoc_url=None,
)

# Attach rate limiter to app state (required by slowapi)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Security headers on every response
app.add_middleware(SecurityHeadersMiddleware)

# CORS — never allow wildcard with credentials=True (browsers reject it anyway)
_cors_origins = [o.strip() for o in os.environ.get("CORS_ORIGINS", "").split(",") if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins or ["*"],
    allow_credentials=bool(_cors_origins),   # credentials only when origins are explicit
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "X-Admin-Key"],
)

# ── API Router ─────────────────────────────────────────────────────────────────
api_router = APIRouter(prefix="/api")


@api_router.get("/")
async def root():
    """Health and discovery endpoint — safe to expose publicly."""
    return {"message": "Alfa Global Group API", "version": "1.0.0", "status": "ok"}


api_router.include_router(contact.router)
api_router.include_router(newsletter.router)
api_router.include_router(testimonials.router)
api_router.include_router(insights.router)

app.include_router(api_router)


# ── Lifecycle ──────────────────────────────────────────────────────────────────
@app.on_event("shutdown")
async def shutdown_db_client():
    """Drain the shared MongoDB connection pool on graceful shutdown."""
    close_connection()
    logger.info("MongoDB connection closed.")