from fastapi import APIRouter, HTTPException, status
from models import Newsletter, NewsletterCreate
from typing import List
import logging
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/newsletter", tags=["newsletter"])

# Load environment variables
ROOT_DIR = Path(__file__).parent.parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'alfaglobal')]

@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
async def subscribe_newsletter(newsletter_data: NewsletterCreate):
    """
    Subscribe to newsletter
    """
    try:
        # Check if email already exists
        existing = await db.newsletters.find_one({"email": newsletter_data.email})
        if existing:
            return {
                "success": True,
                "message": "You are already subscribed to our newsletter!"
            }
        
        # Create newsletter subscription
        newsletter = Newsletter(**newsletter_data.dict())
        
        # Insert into database
        result = await db.newsletters.insert_one(newsletter.dict())
        
        logger.info(f"Newsletter subscription created: {newsletter.email}")
        
        return {
            "success": True,
            "message": "Thank you for subscribing to our newsletter!"
        }
    except Exception as e:
        logger.error(f"Error creating newsletter subscription: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to subscribe to newsletter. Please try again later."
        )

@router.get("", response_model=List[Newsletter])
async def get_newsletters():
    """
    Get all newsletter subscriptions (admin use)
    """
    try:
        newsletters = await db.newsletters.find().sort("subscribedAt", -1).to_list(1000)
        return [Newsletter(**newsletter) for newsletter in newsletters]
    except Exception as e:
        logger.error(f"Error fetching newsletters: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch newsletter subscriptions"
        )