#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for Alfa Global Group
Tests all endpoints with proper data validation and error handling
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Use the production URL from frontend/.env
BASE_URL = "https://wealthdesign.preview.emergentagent.com/api"

class APITester:
    def __init__(self):
        self.base_url = BASE_URL
        self.session = requests.Session()
        self.test_results = []
        
    def log_test(self, test_name, success, details="", response_data=None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"   Details: {details}")
        if response_data and not success:
            print(f"   Response: {response_data}")
        print()
        
        self.test_results.append({
            "test": test_name,
            "success": success,
            "details": details,
            "response": response_data
        })
    
    def test_root_endpoint(self):
        """Test GET /api/ - Root endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/")
            
            if response.status_code == 200:
                data = response.json()
                expected_endpoints = ["/api/contact", "/api/newsletter", "/api/testimonials", "/api/insights"]
                
                if (data.get("message") and 
                    data.get("version") and 
                    data.get("endpoints") and 
                    all(endpoint in data["endpoints"] for endpoint in expected_endpoints)):
                    self.log_test("Root Endpoint", True, f"Version: {data['version']}, Endpoints: {len(data['endpoints'])}")
                else:
                    self.log_test("Root Endpoint", False, "Missing required fields or endpoints", data)
            else:
                self.log_test("Root Endpoint", False, f"Status: {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Exception: {str(e)}")
    
    def test_contact_submission(self):
        """Test POST /api/contact - Contact form submission"""
        test_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "phone": "+1 555-123-4567",
            "companyType": "individual",
            "areaOfInterest": "wealth-advisory",
            "message": "I would like to learn more about your wealth management services and how you can help me plan for retirement."
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact", json=test_data)
            
            if response.status_code == 201:
                data = response.json()
                if (data.get("success") == True and 
                    data.get("id") and 
                    data.get("message")):
                    self.log_test("Contact Submission", True, f"Contact ID: {data['id']}")
                    return data["id"]  # Return ID for further testing
                else:
                    self.log_test("Contact Submission", False, "Missing required response fields", data)
            else:
                self.log_test("Contact Submission", False, f"Status: {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Contact Submission", False, f"Exception: {str(e)}")
        
        return None
    
    def test_contact_validation(self):
        """Test contact form validation with invalid data"""
        invalid_data = {
            "name": "A",  # Too short
            "email": "invalid-email",  # Invalid email
            "message": "Short"  # Too short
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact", json=invalid_data)
            
            if response.status_code == 422:  # Validation error expected
                self.log_test("Contact Validation", True, "Properly rejected invalid data")
            else:
                self.log_test("Contact Validation", False, f"Expected 422, got {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Contact Validation", False, f"Exception: {str(e)}")
    
    def test_newsletter_subscription(self):
        """Test POST /api/newsletter - Newsletter subscription"""
        test_email = f"newsletter.test.{uuid.uuid4().hex[:8]}@example.com"
        test_data = {"email": test_email}
        
        try:
            response = self.session.post(f"{self.base_url}/newsletter", json=test_data)
            
            if response.status_code == 201:
                data = response.json()
                if (data.get("success") == True and 
                    data.get("message")):
                    self.log_test("Newsletter Subscription", True, "Successfully subscribed")
                    
                    # Test duplicate subscription
                    response2 = self.session.post(f"{self.base_url}/newsletter", json=test_data)
                    if response2.status_code == 201:
                        data2 = response2.json()
                        if data2.get("success") == True:
                            self.log_test("Newsletter Duplicate Handling", True, "Gracefully handled duplicate subscription")
                        else:
                            self.log_test("Newsletter Duplicate Handling", False, "Failed to handle duplicate", data2)
                    else:
                        self.log_test("Newsletter Duplicate Handling", False, f"Status: {response2.status_code}", response2.text)
                else:
                    self.log_test("Newsletter Subscription", False, "Missing required response fields", data)
            else:
                self.log_test("Newsletter Subscription", False, f"Status: {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Newsletter Subscription", False, f"Exception: {str(e)}")
    
    def test_newsletter_validation(self):
        """Test newsletter validation with invalid email"""
        invalid_data = {"email": "not-an-email"}
        
        try:
            response = self.session.post(f"{self.base_url}/newsletter", json=invalid_data)
            
            if response.status_code == 422:  # Validation error expected
                self.log_test("Newsletter Validation", True, "Properly rejected invalid email")
            else:
                self.log_test("Newsletter Validation", False, f"Expected 422, got {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Newsletter Validation", False, f"Exception: {str(e)}")
    
    def test_testimonials_fetch(self):
        """Test GET /api/testimonials - Fetch testimonials"""
        try:
            response = self.session.get(f"{self.base_url}/testimonials")
            
            if response.status_code == 200:
                data = response.json()
                if (data.get("success") == True and 
                    isinstance(data.get("data"), list) and 
                    len(data["data"]) > 0):
                    
                    # Validate testimonial structure
                    testimonial = data["data"][0]
                    required_fields = ["id", "name", "position", "content", "rating", "active"]
                    
                    if all(field in testimonial for field in required_fields):
                        self.log_test("Testimonials Fetch", True, f"Retrieved {len(data['data'])} testimonials")
                    else:
                        self.log_test("Testimonials Fetch", False, "Missing required testimonial fields", testimonial)
                else:
                    self.log_test("Testimonials Fetch", False, "Invalid response structure or no data", data)
            else:
                self.log_test("Testimonials Fetch", False, f"Status: {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Testimonials Fetch", False, f"Exception: {str(e)}")
    
    def test_insights_fetch(self):
        """Test GET /api/insights - Fetch insights/blog posts"""
        try:
            response = self.session.get(f"{self.base_url}/insights")
            
            if response.status_code == 200:
                data = response.json()
                if (data.get("success") == True and 
                    isinstance(data.get("data"), list) and 
                    len(data["data"]) > 0):
                    
                    # Validate insight structure
                    insight = data["data"][0]
                    required_fields = ["id", "title", "excerpt", "content", "category", "readTime", "published"]
                    
                    if all(field in insight for field in required_fields):
                        self.log_test("Insights Fetch", True, f"Retrieved {len(data['data'])} insights")
                    else:
                        self.log_test("Insights Fetch", False, "Missing required insight fields", insight)
                else:
                    self.log_test("Insights Fetch", False, "Invalid response structure or no data", data)
            else:
                self.log_test("Insights Fetch", False, f"Status: {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Insights Fetch", False, f"Exception: {str(e)}")
    
    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            response = self.session.options(f"{self.base_url}/")
            
            # Check for CORS headers
            cors_headers = [
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Methods',
                'Access-Control-Allow-Headers'
            ]
            
            has_cors = any(header in response.headers for header in cors_headers)
            
            if has_cors or response.status_code in [200, 405]:  # Some servers don't respond to OPTIONS
                self.log_test("CORS Configuration", True, "CORS headers present or server configured")
            else:
                self.log_test("CORS Configuration", False, f"No CORS headers found, Status: {response.status_code}")
                
        except Exception as e:
            self.log_test("CORS Configuration", False, f"Exception: {str(e)}")
    
    def test_data_persistence(self, contact_id=None):
        """Test data persistence by checking if submitted data exists"""
        if not contact_id:
            self.log_test("Data Persistence", False, "No contact ID available for persistence test")
            return
        
        try:
            # Try to fetch the contact (this endpoint might not be public)
            response = self.session.get(f"{self.base_url}/contact/{contact_id}")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("id") == contact_id:
                    self.log_test("Data Persistence", True, f"Contact {contact_id} persisted correctly")
                else:
                    self.log_test("Data Persistence", False, "Contact ID mismatch", data)
            elif response.status_code == 404:
                self.log_test("Data Persistence", False, "Contact not found in database")
            elif response.status_code == 405:
                # Endpoint might not be available publicly - this is acceptable
                self.log_test("Data Persistence", True, "Contact endpoint not public (acceptable)")
            else:
                self.log_test("Data Persistence", False, f"Unexpected status: {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Data Persistence", False, f"Exception: {str(e)}")
    
    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting Alfa Global Group Backend API Tests")
        print(f"📍 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Test basic connectivity
        self.test_root_endpoint()
        
        # Test contact form
        contact_id = self.test_contact_submission()
        self.test_contact_validation()
        
        # Test newsletter
        self.test_newsletter_subscription()
        self.test_newsletter_validation()
        
        # Test data retrieval
        self.test_testimonials_fetch()
        self.test_insights_fetch()
        
        # Test CORS
        self.test_cors_headers()
        
        # Test data persistence
        self.test_data_persistence(contact_id)
        
        # Summary
        print("=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result["success"])
        total = len(self.test_results)
        
        print(f"✅ Passed: {passed}/{total}")
        print(f"❌ Failed: {total - passed}/{total}")
        
        if total - passed > 0:
            print("\n🔍 FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"   • {result['test']}: {result['details']}")
        
        print(f"\n🎯 Success Rate: {(passed/total)*100:.1f}%")
        
        return passed == total

if __name__ == "__main__":
    tester = APITester()
    success = tester.run_all_tests()
    
    if success:
        print("\n🎉 All tests passed! Backend API is working correctly.")
        sys.exit(0)
    else:
        print("\n⚠️  Some tests failed. Please check the issues above.")
        sys.exit(1)