from fastapi import APIRouter, HTTPException, status
from models import Testimonial, TestimonialCreate
from typing import List
import logging
from motor.motor_asyncio import AsyncIOMotorClient
import os

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/testimonials", tags=["testimonials"])

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'alfaglobal')]

@router.get("", response_model=dict)
async def get_testimonials():
    """
    Get all active testimonials
    """
    try:
        testimonials = await db.testimonials.find({"active": True}).sort("createdAt", -1).to_list(100)
        return {
            "success": True,
            "data": [Testimonial(**testimonial).dict() for testimonial in testimonials]
        }
    except Exception as e:
        logger.error(f"Error fetching testimonials: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch testimonials"
        )

@router.post("", response_model=Testimonial, status_code=status.HTTP_201_CREATED)
async def create_testimonial(testimonial_data: TestimonialCreate):
    """
    Create a new testimonial (admin use)
    """
    try:
        testimonial = Testimonial(**testimonial_data.dict())
        result = await db.testimonials.insert_one(testimonial.dict())
        logger.info(f"Testimonial created: {testimonial.id}")
        return testimonial
    except Exception as e:
        logger.error(f"Error creating testimonial: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create testimonial"
        )

@router.get("/all", response_model=List[Testimonial])
async def get_all_testimonials():
    """
    Get all testimonials including inactive (admin use)
    """
    try:
        testimonials = await db.testimonials.find().sort("createdAt", -1).to_list(1000)
        return [Testimonial(**testimonial) for testimonial in testimonials]
    except Exception as e:
        logger.error(f"Error fetching all testimonials: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch testimonials"
        )