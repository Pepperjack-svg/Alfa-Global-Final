"""
Insights (blog posts) routes.

Public endpoints:
  GET  /api/insights           — list published insights
  GET  /api/insights/{id}      — retrieve a single published insight

Admin-only endpoints (require X-Admin-Key header):
  POST /api/insights           — create an insight
  GET  /api/insights/all       — list all insights including unpublished
"""

import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status

from database import db
from dependencies import require_admin_key
from models import Insight, InsightCreate

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/insights", tags=["insights"])


@router.get("", response_model=dict)
async def get_insights():
    """
    Return all published insights sorted by date descending.

    Public endpoint — no authentication required.
    """
    try:
        insights = await db.insights.find({"published": True}).sort("date", -1).to_list(100)
        return {
            "success": True,
            "data": [Insight(**i).model_dump() for i in insights],
        }
    except Exception as e:
        logger.error("Error fetching insights: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch insights",
        )


@router.post(
    "",
    response_model=Insight,
    status_code=status.HTTP_201_CREATED,
    dependencies=[Depends(require_admin_key)],
)
async def create_insight(insight_data: InsightCreate):
    """
    Create a new insight / blog post.

    Admin-only: requires a valid X-Admin-Key header.
    """
    try:
        insight = Insight(**insight_data.model_dump())
        await db.insights.insert_one(insight.model_dump())
        logger.info("Insight created: %s", insight.id)
        return insight
    except Exception as e:
        logger.error("Error creating insight: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create insight",
        )


@router.get("/all", response_model=List[Insight], dependencies=[Depends(require_admin_key)])
async def get_all_insights():
    """
    Return all insights including unpublished drafts.

    Admin-only: requires a valid X-Admin-Key header.
    """
    try:
        insights = await db.insights.find().sort("date", -1).to_list(1000)
        return [Insight(**i) for i in insights]
    except Exception as e:
        logger.error("Error fetching all insights: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch insights",
        )


@router.get("/{insight_id}", response_model=Insight)
async def get_insight(insight_id: str):
    """
    Retrieve a single insight by its UUID.

    Public endpoint — only published insights are accessible without admin key.
    """
    try:
        insight = await db.insights.find_one({"id": insight_id, "published": True})
        if not insight:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Insight not found")
        return Insight(**insight)
    except HTTPException:
        raise
    except Exception as e:
        logger.error("Error fetching insight: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch insight",
        )