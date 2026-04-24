"""
Newsletter subscription routes.

Public endpoints:
  POST /api/newsletter  — subscribe an email address (rate-limited: 10/minute per IP)

Admin-only endpoints (require X-Admin-Key header):
  GET  /api/newsletter  — list all subscriptions
"""

import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException, Request, status

from database import db
from dependencies import require_admin_key
from limiter import limiter
from models import Newsletter, NewsletterCreate

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/newsletter", tags=["newsletter"])


@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
@limiter.limit("10/minute")
async def subscribe_newsletter(request: Request, newsletter_data: NewsletterCreate):
    """
    Subscribe an email address to the newsletter.

    Idempotent — re-subscribing an already-active address returns success
    without creating a duplicate document.
    Rate-limited to 10 requests per minute per IP.
    """
    try:
        existing = await db.newsletters.find_one({"email": newsletter_data.email})
        if existing:
            return {"success": True, "message": "You are already subscribed to our newsletter!"}

        newsletter = Newsletter(**newsletter_data.model_dump())
        await db.newsletters.insert_one(newsletter.model_dump())
        logger.info("Newsletter subscription created: %s", newsletter.email)
        return {"success": True, "message": "Thank you for subscribing to our newsletter!"}
    except Exception as e:
        logger.error("Error creating newsletter subscription: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to subscribe. Please try again later.",
        )


@router.get("", response_model=List[Newsletter], dependencies=[Depends(require_admin_key)])
async def get_newsletters():
    """
    List all newsletter subscriptions.

    Admin-only: requires a valid X-Admin-Key header.
    """
    try:
        newsletters = await db.newsletters.find().sort("subscribedAt", -1).to_list(1000)
        return [Newsletter(**n) for n in newsletters]
    except Exception as e:
        logger.error("Error fetching newsletters: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch newsletter subscriptions",
        )