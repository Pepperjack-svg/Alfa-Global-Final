# Alfa Global Group

Corporate website and API for Alfa Global Group — a diversified investment and business conglomerate based in Chennai, India.

**Stack:** React (CRA/Craco) · FastAPI · MongoDB · Nginx · Docker

---

## Project Structure

```
Alfa-Global-Final/
├── backend/           # FastAPI application
│   ├── server.py      # App entry point + middleware
│   ├── database.py    # Shared MongoDB connection pool
│   ├── limiter.py     # Shared SlowAPI rate-limiter
│   ├── dependencies.py# Shared FastAPI dependencies (admin key auth)
│   ├── models.py      # Pydantic data models
│   ├── routes/        # Feature routers
│   │   ├── contact.py
│   │   ├── newsletter.py
│   │   ├── testimonials.py
│   │   └── insights.py
│   └── requirements.txt
├── frontend/          # React application
│   └── src/
├── Dockerfile         # Single-container build (nginx + uvicorn + supervisord)
├── docker-compose.yml # Multi-container stack (MongoDB + backend + frontend)
├── nginx.conf         # Nginx config for docker-compose setup
└── nginx.single.conf  # Nginx config for single-container Dockerfile
```

---

## Local Development

### Option A — Docker Compose (recommended)

```bash
# 1. Copy and fill in environment variables
cp .env.example .env

# 2. Start the full stack
docker-compose up --build
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost |
| Backend API | http://localhost:8001/api/ |

---

### Option B — Run services individually

**Backend**
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Create a .env file (see Environment Variables below)
uvicorn server:app --reload --port 8001
```

**Frontend**
```bash
cd frontend
yarn install
REACT_APP_BACKEND_URL=http://localhost:8001 yarn start
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in the values. In Dokploy / Railway, set these directly in the service dashboard.

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGO_URL` | ✅ | MongoDB connection string |
| `DB_NAME` | ✅ | Database name (default: `alfaglobal`) |
| `CORS_ORIGINS` | ✅ (prod) | Comma-separated allowed origins, e.g. `https://yoursite.com` |
| `ADMIN_API_KEY` | ✅ | Secret key for admin-only endpoints (GET contact/newsletter lists) |
| `RESEND_API_KEY` | optional | Resend API key for email sending |
| `ENABLE_DOCS` | optional | Set to `1` to enable Swagger UI at `/docs` |
| `REACT_APP_BACKEND_URL` | ✅ (prod) | Public URL of the backend (build-time, frontend only) |

> ⚠️ `REACT_APP_BACKEND_URL` is baked into the React bundle at build time. If your frontend and backend share a domain (e.g. via nginx reverse proxy), set it to an empty string — API calls will go to `/api/` on the same origin.

---

## Deployment

### Dokploy — Single Container (Dockerfile builder)

1. Create a new **Application** in Dokploy.
2. Set **Build Type** → `Dockerfile`, **Dockerfile path** → `Dockerfile`.
3. Set environment variables (see above).
4. Deploy — exposes **port 80** with nginx serving the React app and proxying `/api/` to uvicorn.

### Dokploy — Multi-Container (Docker Compose builder)

1. Create a new **Docker Compose** application.
2. Point at `docker-compose.yml` in the repo root.
3. Set environment variables.
4. Deploy — creates three containers: MongoDB, backend (port 8001), frontend/nginx (port 80).

### Railway / Railpack / Nixpacks — Per-service

Deploy backend and frontend as **two separate services**, each pointing to its subdirectory:

| Service | Root Directory | Config files |
|---------|---------------|--------------|
| Backend | `backend/` | `railpack.json`, `nixpacks.toml`, `railway.json` |
| Frontend | `frontend/` | `railpack.json`, `nixpacks.toml`, `railway.json` |

Set `REACT_APP_BACKEND_URL` on the frontend service to the backend's public URL.
Add a MongoDB plugin or use MongoDB Atlas for `MONGO_URL`.

> ⚠️ **Do not use Railpack/Nixpacks pointing at the repo root.** These tools are single-language and cannot auto-detect a mixed Python+Node monorepo. Use the Dockerfile builder instead, or deploy the two services separately from their subdirectories.

---

## API Endpoints

Base URL: `/api`

### Public

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/` | Health check |
| `POST` | `/api/contact` | Submit a contact form (rate-limited: 10/min) |
| `POST` | `/api/newsletter` | Subscribe to newsletter (rate-limited: 10/min) |
| `GET` | `/api/testimonials` | List active testimonials |
| `GET` | `/api/insights` | List published insights |
| `GET` | `/api/insights/{id}` | Get a single published insight |

### Admin (requires `X-Admin-Key: <ADMIN_API_KEY>` header)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/contact` | List all contact submissions |
| `GET` | `/api/contact/{id}` | Get a single contact submission |
| `GET` | `/api/newsletter` | List all newsletter subscriptions |
| `POST` | `/api/testimonials` | Create a testimonial |
| `GET` | `/api/testimonials/all` | List all testimonials (incl. inactive) |
| `POST` | `/api/insights` | Create an insight |
| `GET` | `/api/insights/all` | List all insights (incl. unpublished) |

---

## Security

- **Rate limiting** — public POST endpoints are limited to 10 requests/minute per IP (slowapi).
- **Admin endpoints** — all write and list endpoints require an `X-Admin-Key` header matching `ADMIN_API_KEY`.
- **Security headers** — every response includes `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, `Referrer-Policy`, and `Permissions-Policy`.
- **CORS** — wildcard `*` is only permitted when `CORS_ORIGINS` is not set (local dev). Production deployments must set explicit origins.
- **API docs** — Swagger UI is disabled by default. Set `ENABLE_DOCS=1` to enable during development.
