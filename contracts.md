# Alfa Global Group - Backend Integration Contracts

## Overview
This document outlines the API contracts and backend integration plan for the Alfa Global Group website.

## Current Mock Data (to be replaced with actual backend)
Located in: `/app/frontend/src/mock.js`
- Hero data
- Statistics data
- Services data
- Values data
- About data
- Testimonials data
- Team data
- Insights/Blog data
- Contact data
- FAQ data
- Form options (company types, areas of interest)

---

## API Endpoints to Implement

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "companyType": "string",
  "areaOfInterest": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! Our team will contact you shortly.",
  "id": "contact_id"
}
```

**MongoDB Model:** `Contact`
- name: String (required)
- email: String (required)
- phone: String
- companyType: String (required)
- areaOfInterest: String (required)
- message: String (required)
- createdAt: DateTime
- status: String (default: "new")

---

### 2. Newsletter Subscription
**Endpoint:** `POST /api/newsletter`

**Request Body:**
```json
{
  "email": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for subscribing to our newsletter!"
}
```

**MongoDB Model:** `Newsletter`
- email: String (required, unique)
- subscribedAt: DateTime
- status: String (default: "active")

---

### 3. Get Testimonials
**Endpoint:** `GET /api/testimonials`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "position": "string",
      "content": "string",
      "rating": "number"
    }
  ]
}
```

**MongoDB Model:** `Testimonial`
- name: String
- position: String
- content: String
- rating: Number
- active: Boolean
- createdAt: DateTime

---

### 4. Get Insights/Blog Posts
**Endpoint:** `GET /api/insights`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "excerpt": "string",
      "date": "string",
      "category": "string",
      "readTime": "string"
    }
  ]
}
```

**MongoDB Model:** `Insight`
- title: String
- excerpt: String
- content: String (full content)
- category: String
- readTime: String
- date: DateTime
- published: Boolean
- createdAt: DateTime

---

### 5. Investment Calculator (No backend needed - client-side calculation)
Currently working as frontend-only with JavaScript calculations.

---

## Frontend Integration Points

### Files to Update:

1. **Contact Page** (`/app/frontend/src/pages/Contact.jsx`)
   - Replace form submission alert with API call to `/api/contact`
   - Replace newsletter submission alert with API call to `/api/newsletter`

2. **Testimonials Component** (`/app/frontend/src/components/Testimonials.jsx`)
   - Fetch testimonials from `/api/testimonials`
   - Replace `testimonialsData` from mock.js

3. **Insights Component** (`/app/frontend/src/components/Insights.jsx`)
   - Fetch insights from `/api/insights`
   - Replace `insightsData` from mock.js

4. **Footer Component** (`/app/frontend/src/components/Footer.jsx`)
   - Newsletter form to call `/api/newsletter`

---

## Backend Implementation Steps

1. **Create MongoDB Models:**
   - Contact
   - Newsletter
   - Testimonial
   - Insight

2. **Create API Routes:**
   - POST /api/contact
   - POST /api/newsletter
   - GET /api/testimonials
   - GET /api/insights

3. **Add Validation:**
   - Email validation
   - Required field validation
   - Duplicate email check for newsletter

4. **Error Handling:**
   - Proper error messages
   - HTTP status codes
   - Logging

5. **Testing:**
   - Test all endpoints with curl
   - Verify MongoDB data storage
   - Test frontend integration

---

## Data Currently in Mock (Static)
These will remain in mock.js as they are static content:
- heroData
- statisticsData
- servicesData
- valuesData
- aboutData
- contactData (address, phone, email - static info)
- navigationLinks
- footerLinks
- faqData
- companyTypes
- areasOfInterest

---

## Notes
- All API endpoints should return JSON
- Use proper HTTP status codes (200, 201, 400, 500)
- Implement CORS handling (already configured in backend)
- Add timestamps to all models
- Consider adding email notifications for contact form submissions (future enhancement)
