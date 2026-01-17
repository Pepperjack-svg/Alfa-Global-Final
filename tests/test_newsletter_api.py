"""
Backend API Tests for Alfa Global Group - Newsletter and Core APIs
Tests: Newsletter subscription, API health, status endpoints
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAPIHealth:
    """Test API health and root endpoints"""
    
    def test_api_root_returns_welcome(self):
        """Test that API root returns welcome message"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert "Welcome to Alfa Global Group API" in data["message"]
        assert "endpoints" in data
        assert "/api/newsletter" in data["endpoints"]
    
    def test_api_status_endpoint(self):
        """Test status endpoint works"""
        response = requests.get(f"{BASE_URL}/api/status")
        assert response.status_code == 200
        assert isinstance(response.json(), list)


class TestNewsletterAPI:
    """Test Newsletter subscription API"""
    
    def test_newsletter_subscribe_success(self):
        """Test successful newsletter subscription"""
        unique_email = f"test_{uuid.uuid4().hex[:8]}@example.com"
        response = requests.post(
            f"{BASE_URL}/api/newsletter",
            json={"email": unique_email},
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 201
        data = response.json()
        assert data["success"] == True
        assert "Thank you" in data["message"] or "subscribed" in data["message"].lower()
    
    def test_newsletter_duplicate_email_handled(self):
        """Test that duplicate email subscription is handled gracefully"""
        unique_email = f"test_dup_{uuid.uuid4().hex[:8]}@example.com"
        
        # First subscription
        response1 = requests.post(
            f"{BASE_URL}/api/newsletter",
            json={"email": unique_email},
            headers={"Content-Type": "application/json"}
        )
        assert response1.status_code == 201
        
        # Second subscription with same email
        response2 = requests.post(
            f"{BASE_URL}/api/newsletter",
            json={"email": unique_email},
            headers={"Content-Type": "application/json"}
        )
        # Should return success (already subscribed message)
        assert response2.status_code == 201
        data = response2.json()
        assert data["success"] == True
    
    def test_newsletter_invalid_email_rejected(self):
        """Test that invalid email format is rejected"""
        response = requests.post(
            f"{BASE_URL}/api/newsletter",
            json={"email": "invalid-email"},
            headers={"Content-Type": "application/json"}
        )
        # Should return 422 for validation error
        assert response.status_code == 422
    
    def test_newsletter_empty_email_rejected(self):
        """Test that empty email is rejected"""
        response = requests.post(
            f"{BASE_URL}/api/newsletter",
            json={"email": ""},
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422
    
    def test_newsletter_get_subscriptions(self):
        """Test getting newsletter subscriptions list"""
        response = requests.get(f"{BASE_URL}/api/newsletter")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)


class TestContactAPI:
    """Test Contact form API"""
    
    def test_contact_form_submission(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test User",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "phone": "+1234567890",
            "companyType": "Individual",
            "areaOfInterest": "Wealth Management",
            "message": "This is a test message for the contact form submission."
        }
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 201
        data = response.json()
        assert "id" in data or "success" in data
    
    def test_contact_form_validation(self):
        """Test contact form validation - missing required fields"""
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json={"name": "Test"},  # Missing required fields
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422


class TestTestimonialsAPI:
    """Test Testimonials API"""
    
    def test_get_testimonials(self):
        """Test getting testimonials list"""
        response = requests.get(f"{BASE_URL}/api/testimonials")
        assert response.status_code == 200
        data = response.json()
        # API returns {success: true, data: [...]}
        assert data.get("success") == True
        assert isinstance(data.get("data"), list)


class TestInsightsAPI:
    """Test Insights/Blog API"""
    
    def test_get_insights(self):
        """Test getting insights list"""
        response = requests.get(f"{BASE_URL}/api/insights")
        assert response.status_code == 200
        data = response.json()
        # API returns {success: true, data: [...]}
        assert data.get("success") == True
        assert isinstance(data.get("data"), list)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
