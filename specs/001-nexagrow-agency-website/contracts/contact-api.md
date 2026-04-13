# API Contract: Contact Form Submission

**Date**: 2026-04-11
**Feature**: 001-nexagrow-agency-website

---

## POST /api/contact

Submit a contact form inquiry to the NexaGrow team.

### Request

**Content-Type**: `application/json`

**Body Schema**:

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | `string` | ✅ | Min 2 chars, max 100 chars |
| `email` | `string` | ✅ | Valid email format |
| `phone` | `string` | ❌ | Valid phone format if provided |
| `service` | `string` | ✅ | Must match one of: "Social Media Marketing", "AI Automation", "Web Development", "Google Ads", "Brand Strategy", "Content Creation" |
| `message` | `string` | ✅ | Min 10 chars, max 2000 chars |
| `budget` | `string` | ❌ | One of: "Under $1K", "$1K-$5K", "$5K-$10K", "$10K+" |

**Example Request**:
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+1234567890",
  "service": "Google Ads",
  "message": "We need help with Google Ads for our real estate business in Dubai.",
  "budget": "$5K-$10K"
}
```

### Response

**Success (200 OK)**:
```json
{
  "success": true,
  "message": "Thank you! We'll get back to you within 24 hours."
}
```

**Validation Error (400 Bad Request)**:
```json
{
  "success": false,
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "message",
      "message": "Message must be at least 10 characters"
    }
  ]
}
```

**Server Error (500 Internal Server Error)**:
```json
{
  "success": false,
  "message": "Failed to send message. Please try again or contact us directly."
}
```

### Rate Limiting

- Maximum 5 submissions per IP per hour
- Return `429 Too Many Requests` if exceeded

### Security

- Zod schema validation on both client and server
- Email sanitization (strip HTML, trim whitespace)
- No sensitive data in error messages
- CORS restricted to same-origin

---

## GET /api/health

Health check endpoint (optional, for monitoring).

**Response (200 OK)**:
```json
{
  "status": "ok",
  "timestamp": "2026-04-11T12:00:00.000Z"
}
```
