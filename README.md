# Alfa Global Group — Production Deployment Guide

## Architecture

| Service | Technology | Port |
|---------|-----------|------|
| Backend | FastAPI + Uvicorn | `$PORT` (Railway-assigned) |
| Frontend | React (CRA/Craco) → served by `serve` | `$PORT` (Railway-assigned) |
| Database | MongoDB (Railway plugin or Atlas) | 27017 |

---

## 🚀 Deploying to Railway with Nixpacks

Railway treats each service independently. You will create **two services** (backend + frontend) and one **MongoDB plugin**.

### Step 1 — Create a New Railway Project

1. Go to [railway.app](https://railway.app) → **New Project**.
2. Choose **Deploy from GitHub repo** and select this repository.

---

### Step 2 — Backend Service

1. In your Railway project click **+ New Service → GitHub Repo**.
2. Set **Root Directory** → `backend`
3. Railway will auto-detect the `nixpacks.toml` and use it.
4. Add the following **Environment Variables** in the Railway dashboard:

| Variable | Value |
|----------|-------|
| `MONGO_URL` | Your MongoDB connection string (from Step 4) |
| `DB_NAME` | `alfaglobal` |
| `CORS_ORIGINS` | `https://<your-frontend>.up.railway.app` |
| `RESEND_API_KEY` | Your Resend API key |

5. Railway assigns `$PORT` automatically — the Nixpacks start command already uses it.

---

### Step 3 — Frontend Service

1. Click **+ New Service → GitHub Repo** again (same repo).
2. Set **Root Directory** → `frontend`
3. Add the following **Environment Variables**:

| Variable | Value |
|----------|-------|
| `REACT_APP_BACKEND_URL` | The Railway **public URL** of your backend service (e.g. `https://backend.up.railway.app`) |

> ⚠️ `REACT_APP_BACKEND_URL` is a **build-time** variable. Set it before the first deploy or trigger a redeploy after setting it.

---

### Step 4 — MongoDB

**Option A: Railway MongoDB Plugin (easiest)**
1. In your project → **+ New** → **Database → MongoDB**.
2. Copy the `MONGO_PUBLIC_URL` value and paste it as `MONGO_URL` in the backend service.

**Option B: MongoDB Atlas (production-recommended)**
1. Create a free cluster at [mongodb.com/atlas](https://mongodb.com/atlas).
2. Whitelist all IPs (`0.0.0.0/0`) or use Railway's outbound IPs.
3. Paste the Atlas connection string as `MONGO_URL`.

---

### Step 5 — Verify

- Backend health check: `GET https://<backend>.up.railway.app/api/`
- Frontend: visit `https://<frontend>.up.railway.app`

---

## 🐳 Local Development (Docker Compose)

```bash
# Copy and fill in environment variables
cp .env.example .env

# Start all services
docker-compose up --build
```

- Frontend: http://localhost:80
- Backend: http://localhost:8001
- API docs: http://localhost:8001/docs

---

## Environment Variables Reference

See [`.env.example`](.env.example) for a full list of required variables.
