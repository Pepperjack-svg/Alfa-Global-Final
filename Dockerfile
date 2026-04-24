# =============================================================================
# Alfa Global Group — Single-Container Production Image
# Runs: React (nginx) + FastAPI (uvicorn) in one container via supervisord
# Use this with Dokploy "Dockerfile" builder pointing at the repo root.
# =============================================================================

# ── Stage 1: Build React frontend ───────────────────────────────────────────
FROM node:18-alpine AS frontend-build

WORKDIR /app

COPY frontend/package.json frontend/yarn.lock* ./
RUN yarn install --frozen-lockfile

COPY frontend/ .

# REACT_APP_BACKEND_URL should be set as a build arg in Dokploy.
# When both services run in the same container, /api proxies via nginx
# so the default empty string (same-origin) is correct.
ARG REACT_APP_BACKEND_URL=""
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

RUN yarn build

# ── Stage 2: Production runtime ─────────────────────────────────────────────
FROM python:3.11-slim

# Install nginx + supervisor (process manager)
RUN apt-get update \
    && apt-get install -y --no-install-recommends nginx supervisor \
    && rm -rf /var/lib/apt/lists/*

# ── Python backend ───────────────────────────────────────────────────────────
WORKDIR /app/backend

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

# ── Frontend static build ────────────────────────────────────────────────────
COPY --from=frontend-build /app/build /usr/share/nginx/html

# ── Nginx config (localhost proxy to uvicorn) ────────────────────────────────
COPY nginx.single.conf /etc/nginx/conf.d/default.conf

# ── Supervisor config ────────────────────────────────────────────────────────
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose only one public port — nginx handles all traffic
EXPOSE 80

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
