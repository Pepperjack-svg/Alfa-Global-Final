"""
Testimonials routes.

Public endpoints:
  GET  /api/testimonials       — list active testimonials

Admin-only endpoints (require X-Admin-Key header):
  POST /api/testimonials       — create a testimonial
  GET  /api/testimonials/all   — list all testimonials including inactive
"""

import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status

from database import db
from dependencies import require_admin_key
from models import Testimonial, TestimonialCreate

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/testimonials", tags=["testimonials"])


@router.get("", response_model=dict)
async def get_testimonials():
    """
    Return all active (published) testimonials sorted by creation date descending.

    Public endpoint — no authentication required.
    """
    try:
        testimonials = (
            await db.testimonials.find({"active": True}).sort("createdAt", -1).to_list(100)
        )
        return {
            "success": True,
            "data": [Testimonial(**t).model_dump() for t in testimonials],
        }
    except Exception as e:
        logger.error("Error fetching testimonials: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch testimonials",
        )


@router.post(
    "",
    response_model=Testimonial,
    status_code=status.HTTP_201_CREATED,
    dependencies=[Depends(require_admin_key)],
)
async def create_testimonial(testimonial_data: TestimonialCreate):
    """
    Create a new testimonial.

    Admin-only: requires a valid X-Admin-Key header.
    """
    try:
        testimonial = Testimonial(**testimonial_data.model_dump())
        await db.testimonials.insert_one(testimonial.model_dump())
        logger.info("Testimonial created: %s", testimonial.id)
        return testimonial
    except Exception as e:
        logger.error("Error creating testimonial: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create testimonial",
        )


@router.get("/all", response_model=List[Testimonial], dependencies=[Depends(require_admin_key)])
async def get_all_testimonials():
    """
    Return all testimonials including inactive ones.

    Admin-only: requires a valid X-Admin-Key header.
    """
    try:
        testimonials = await db.testimonials.find().sort("createdAt", -1).to_list(1000)
        return [Testimonial(**t) for t in testimonials]
    except Exception as e:
        logger.error("Error fetching all testimonials: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch testimonials",
        )