from fastapi import APIRouter, HTTPException, status
from models import Testimonial, TestimonialCreate
from typing import List
import logging
import os
from motor.motor_asyncio import AsyncIOMotorClient

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/testimonials", tags=["testimonials"])

# Shared DB connection (env already loaded by server.py at startup)
db = AsyncIOMotorClient(os.environ["MONGO_URL"])[os.environ.get("DB_NAME", "alfaglobal")]


@router.get("", response_model=dict)
async def get_testimonials():
    """Get all active testimonials."""
    try:
        testimonials = await db.testimonials.find({"active": True}).sort("createdAt", -1).to_list(100)
        return {"success": True, "data": [Testimonial(**t).dict() for t in testimonials]}
    except Exception as e:
        logger.error(f"Error fetching testimonials: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch testimonials",
        )


@router.post("", response_model=Testimonial, status_code=status.HTTP_201_CREATED)
async def create_testimonial(testimonial_data: TestimonialCreate):
    """Create a new testimonial (admin use)."""
    try:
        testimonial = Testimonial(**testimonial_data.dict())
        await db.testimonials.insert_one(testimonial.dict())
        logger.info(f"Testimonial created: {testimonial.id}")
        return testimonial
    except Exception as e:
        logger.error(f"Error creating testimonial: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create testimonial",
        )


@router.get("/all", response_model=List[Testimonial])
async def get_all_testimonials():
    """Get all testimonials including inactive (admin use)."""
    try:
        testimonials = await db.testimonials.find().sort("createdAt", -1).to_list(1000)
        return [Testimonial(**t) for t in testimonials]
    except Exception as e:
        logger.error(f"Error fetching all testimonials: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch testimonials",
        )