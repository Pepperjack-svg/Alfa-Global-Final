from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime, timezone
import uuid

# Contact Form Model
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    companyType: str = Field(..., min_length=2)
    areaOfInterest: str = Field(..., min_length=2)
    message: str = Field(..., min_length=10, max_length=2000)

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    companyType: str
    areaOfInterest: str
    message: str
    status: str = Field(default="new")
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Newsletter Subscription Model
class NewsletterCreate(BaseModel):
    email: EmailStr

class Newsletter(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    subscribedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = Field(default="active")

# Testimonial Model
class TestimonialCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    position: str = Field(..., min_length=2, max_length=150)
    content: str = Field(..., min_length=10, max_length=1000)
    rating: int = Field(..., ge=1, le=5)
    active: bool = Field(default=True)

class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    position: str
    content: str
    rating: int
    active: bool = True
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Insight/Blog Model
class InsightCreate(BaseModel):
    title: str = Field(..., min_length=5, max_length=200)
    excerpt: str = Field(..., min_length=10, max_length=500)
    content: str = Field(..., min_length=50)
    category: str = Field(..., min_length=2, max_length=100)
    readTime: str = Field(..., max_length=50)
    published: bool = Field(default=True)

class Insight(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    content: str
    category: str
    readTime: str
    date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    published: bool = True
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))