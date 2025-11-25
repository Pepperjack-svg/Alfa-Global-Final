from fastapi import APIRouter, HTTPException, status
from models import Insight, InsightCreate
from typing import List
import logging
from motor.motor_asyncio import AsyncIOMotorClient
import os

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/insights", tags=["insights"])

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'alfaglobal')]

@router.get("", response_model=dict)
async def get_insights():
    """
    Get all published insights/blog posts
    """
    try:
        insights = await db.insights.find({"published": True}).sort("date", -1).to_list(100)
        return {
            "success": True,
            "data": [Insight(**insight).dict() for insight in insights]
        }
    except Exception as e:
        logger.error(f"Error fetching insights: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch insights"
        )

@router.post("", response_model=Insight, status_code=status.HTTP_201_CREATED)
async def create_insight(insight_data: InsightCreate):
    """
    Create a new insight/blog post (admin use)
    """
    try:
        insight = Insight(**insight_data.dict())
        result = await db.insights.insert_one(insight.dict())
        logger.info(f"Insight created: {insight.id}")
        return insight
    except Exception as e:
        logger.error(f"Error creating insight: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create insight"
        )

@router.get("/all", response_model=List[Insight])
async def get_all_insights():
    """
    Get all insights including unpublished (admin use)
    """
    try:
        insights = await db.insights.find().sort("date", -1).to_list(1000)
        return [Insight(**insight) for insight in insights]
    except Exception as e:
        logger.error(f"Error fetching all insights: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch insights"
        )

@router.get("/{insight_id}", response_model=Insight)
async def get_insight(insight_id: str):
    """
    Get a specific insight by ID
    """
    try:
        insight = await db.insights.find_one({"id": insight_id})
        if not insight:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Insight not found"
            )
        return Insight(**insight)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching insight: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch insight"
        )