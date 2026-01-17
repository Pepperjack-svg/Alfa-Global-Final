# Alfa Global Group Website - Product Requirements Document

## Original Problem Statement
Build a premium, professional website for "Alfa Global Group" - a diversified global organization with business interests in wealth management, private equity, fintech trading, financial product distribution, agriculture, and cyber security.

## User Personas
- **High Net Worth Individuals (HNIs)**: Looking for wealth management and investment advisory services
- **Institutional Investors**: Seeking private equity and strategic investment opportunities
- **Corporate Clients**: Requiring cybersecurity solutions and business consulting
- **General Visitors**: Learning about the company and its subsidiaries

## Core Requirements

### Pages Structure
1. **Home** (`/`) - Hero section, performance stats, company overview, trust badges
2. **About** (`/about`) - Company history, vision, mission, group companies overview
3. **Services** (`/services`) - 7 service categories across all business verticals
4. **Strategy** (`/strategy`) - 5 strategic pillars, execution methods, performance stats
5. **Global Access** (`/global-access`) - International presence, regional access areas
6. **FAQs** (`/faqs`) - 6 FAQ categories with expandable accordions
7. **Contact** (`/contact`) - Contact form, phone, email, office address, map

### Company Pages (Dropdown Menu)
8. **Alfa Global Wealth Advisors** (`/alfa-global-wealth-advisors`) - Wealth management arm
9. **Alfa Star Dynamics** (`/alfa-star-dynamics`) - Private equity & capital investments
10. **Alfa Zillion Traders** (`/alfa-zillion-traders`) - Fintech trading platform
11. **Gazillion Capital** (`/gazillion-capital`) - Financial product distribution
12. **MK Dairy Farms** (`/mk-dairy-farms`) - Agriculture & natural resources
13. **Cyberhakz** (`/cyberhakz`) - Enterprise cybersecurity solutions

### Design Requirements
- Premium, professional look with dark hero sections
- Theme switcher (Gold, Silver, Purple, Teal)
- 3D Globe preloader animation
- Responsive design for mobile/tablet/desktop
- Animated sections with Framer Motion

## What's Been Implemented (January 2026)

### Completed Features
- [x] Full site structure with 13 pages
- [x] Header with dropdown menu for 6 company pages
- [x] Footer with complete links and contact info
- [x] Home page with hero, stats, awards, trusted by section
- [x] About page with company info, vision/mission, companies grid
- [x] Services page with 7 service categories
- [x] Strategy page with 5 strategic pillars
- [x] Global Access page with international reach info
- [x] FAQs page with 6 expandable FAQ categories
- [x] Contact page with form and contact details
- [x] All 6 company pages with full content
- [x] Theme switcher (4 themes)
- [x] 3D Globe preloader
- [x] Mobile responsive navigation
- [x] All content populated from reference website
- [x] **Working images on all company pages** (replaced broken external URLs with Unsplash)
- [x] **Hero CTAs on all company pages** - Single "Find out More" button linking to external company websites
- [x] **Hero banner transparency effect** - Subtle grid pattern + radial gradients on dark hero sections
- [x] **External links**: Each company page links to its dedicated website
- [x] **Newsletter subscription** with backend API (POST /api/newsletter)
- [x] **WhatsApp floating chat button** for instant customer contact
- [x] **Back to Top button** appears on scroll
- [x] **Cookie consent banner** with localStorage persistence
- [x] **Scroll progress indicator** at top of page
- [x] **Client testimonials section** with 4 testimonials, star ratings, and trust stats
- [x] **Partners/Certifications section** (SEBI, ISO 27001, NSE, BSE, AMFI, NSDL, CDSL)
- [x] **Service Highlights section** with 4 clickable cards linking to company pages
- [x] **Privacy Policy page** at /privacy
- [x] **Terms of Service page** at /terms
- [x] **Codebase cleanup** - Removed 25+ obsolete component/page files

### Testing Status
- Frontend: 100% PASS (all 13 pages tested)
- Navigation: PASS (dropdown, mobile menu, footer links)
- Responsiveness: PASS

## Tech Stack
- **Frontend**: React, React Router, Tailwind CSS, Framer Motion, Three.js
- **Backend**: FastAPI (for contact form API)
- **Database**: MongoDB

## Architecture
```
/app
├── backend/
│   ├── routes/contact.py
│   └── server.py
└── frontend/src/
    ├── components/
    │   ├── UltraHeader.jsx
    │   ├── UltraFooter.jsx
    │   └── Globe3DPreloader.jsx
    ├── pages/
    │   ├── UltraHome.jsx
    │   ├── AboutPage.jsx
    │   ├── ServicesPage.jsx
    │   ├── StrategyPage.jsx
    │   ├── GlobalAccessPage.jsx
    │   ├── FAQsPage.jsx
    │   ├── PremiumContact.jsx
    │   ├── AlfaGlobalWealthAdvisorsPage.jsx
    │   ├── AlfaStarDynamicsPage.jsx
    │   ├── AlfaZillionTradersPage.jsx
    │   ├── GazillionCapitalPage.jsx
    │   ├── MKDairyFarmsPage.jsx
    │   └── CyberhakzPage.jsx
    └── App.js
```

## Pending Tasks

### P1 - Contact Form Email (Optional)
- Implement SMTP email logic using Resend integration (user opted to skip for now)
- Backend API endpoint exists and saves to database, just doesn't send emails

## API Endpoints
- `POST /api/contact` - Contact form submission (saves to DB, email not sent)
- `POST /api/newsletter` - Newsletter subscription
- `GET /api/newsletter` - Get all subscribers
- `GET /api/testimonials` - Get testimonials
- `GET /api/insights` - Get insights

## Known Issues
- External images from reference website may load slowly
- Contact form stores data but doesn't send email notifications
