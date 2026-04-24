from fastapi import APIRouter, HTTPException, status
from models import Newsletter, NewsletterCreate
from typing import List
import logging
import os
from motor.motor_asyncio import AsyncIOMotorClient

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/newsletter", tags=["newsletter"])

# Shared DB connection (env already loaded by server.py at startup)
db = AsyncIOMotorClient(os.environ["MONGO_URL"])[os.environ.get("DB_NAME", "alfaglobal")]


@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
async def subscribe_newsletter(newsletter_data: NewsletterCreate):
    """Subscribe to newsletter."""
    try:
        existing = await db.newsletters.find_one({"email": newsletter_data.email})
        if existing:
            return {"success": True, "message": "You are already subscribed to our newsletter!"}

        newsletter = Newsletter(**newsletter_data.dict())
        await db.newsletters.insert_one(newsletter.dict())
        logger.info(f"Newsletter subscription created: {newsletter.email}")
        return {"success": True, "message": "Thank you for subscribing to our newsletter!"}
    except Exception as e:
        logger.error(f"Error creating newsletter subscription: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to subscribe to newsletter. Please try again later.",
        )


@router.get("", response_model=List[Newsletter])
async def get_newsletters():
    """Get all newsletter subscriptions (admin use)."""
    try:
        newsletters = await db.newsletters.find().sort("subscribedAt", -1).to_list(1000)
        return [Newsletter(**n) for n in newsletters]
    except Exception as e:
        logger.error(f"Error fetching newsletters: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch newsletter subscriptions",
        )