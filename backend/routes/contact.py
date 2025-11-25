from fastapi import APIRouter, HTTPException, status
from models import Contact, ContactCreate
from typing import List
import logging
from motor.motor_asyncio import AsyncIOMotorClient
import os

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'alfaglobal')]

@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
async def create_contact(contact_data: ContactCreate):
    """
    Create a new contact form submission
    """
    try:
        # Create contact object
        contact = Contact(**contact_data.dict())
        
        # Insert into database
        result = await db.contacts.insert_one(contact.dict())
        
        logger.info(f"Contact created successfully: {contact.id}")
        
        return {
            "success": True,
            "message": "Thank you for your message! Our team will contact you shortly.",
            "id": contact.id
        }
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit contact form. Please try again later."
        )

@router.get("", response_model=List[Contact])
async def get_contacts():
    """
    Get all contact form submissions (admin use)
    """
    try:
        contacts = await db.contacts.find().sort("createdAt", -1).to_list(1000)
        return [Contact(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contacts"
        )

@router.get("/{contact_id}", response_model=Contact)
async def get_contact(contact_id: str):
    """
    Get a specific contact by ID
    """
    try:
        contact = await db.contacts.find_one({"id": contact_id})
        if not contact:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Contact not found"
            )
        return Contact(**contact)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching contact: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contact"
        )