"""
Reusable FastAPI dependencies for shared cross-cutting concerns.

Usage in routes:
    from fastapi import Depends
    from dependencies import require_admin_key

    @router.get("", dependencies=[Depends(require_admin_key)])
    async def list_items(): ...
"""

import os
from fastapi import HTTPException, Security
from fastapi.security import APIKeyHeader

_admin_key_header = APIKeyHeader(name="X-Admin-Key", auto_error=False)


def require_admin_key(api_key: str | None = Security(_admin_key_header)) -> None:
    """
    Reject requests that do not carry a valid X-Admin-Key header.

    Protects admin-only read endpoints (e.g. GET /contacts, GET /newsletters)
    from public internet access. Set ADMIN_API_KEY in your environment.
    If ADMIN_API_KEY is not set, all requests are blocked (fail-safe default).
    """
    expected = os.environ.get("ADMIN_API_KEY", "")
    if not expected or api_key != expected:
        raise HTTPException(status_code=403, detail="Forbidden")
