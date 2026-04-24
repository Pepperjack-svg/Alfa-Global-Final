"""
Contact form routes.

Public endpoints:
  POST /api/contact   — submit a contact form (rate-limited: 10/minute per IP)

Admin-only endpoints (require X-Admin-Key header):
  GET  /api/contact         — list all submissions
  GET  /api/contact/{id}    — retrieve a single submission
"""

import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException, Request, status

from database import db
from dependencies import require_admin_key
from limiter import limiter
from models import Contact, ContactCreate

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
@limiter.limit("10/minute")
async def create_contact(request: Request, contact_data: ContactCreate):
    """
    Submit a contact form enquiry.

    Rate-limited to 10 submissions per minute per IP address to prevent
    spam and abuse (ISO 27001 A.12.6 — protection against technical vulnerabilities).
    """
    try:
        contact = Contact(**contact_data.model_dump())
        await db.contacts.insert_one(contact.model_dump())
        logger.info("Contact created: %s", contact.id)
        return {
            "success": True,
            "message": "Thank you for your message! Our team will contact you shortly.",
            "id": contact.id,
        }
    except Exception as e:
        logger.error("Error creating contact: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit contact form. Please try again later.",
        )


@router.get("", response_model=List[Contact], dependencies=[Depends(require_admin_key)])
async def get_contacts():
    """
    List all contact form submissions.

    Admin-only: requires a valid X-Admin-Key header.
    """
    try:
        contacts = await db.contacts.find().sort("createdAt", -1).to_list(1000)
        return [Contact(**c) for c in contacts]
    except Exception as e:
        logger.error("Error fetching contacts: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contacts",
        )


@router.get("/{contact_id}", response_model=Contact, dependencies=[Depends(require_admin_key)])
async def get_contact(contact_id: str):
    """
    Retrieve a single contact submission by ID.

    Admin-only: requires a valid X-Admin-Key header.
    """
    try:
        contact = await db.contacts.find_one({"id": contact_id})
        if not contact:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Contact not found")
        return Contact(**contact)
    except HTTPException:
        raise
    except Exception as e:
        logger.error("Error fetching contact: %s", e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contact",
        )