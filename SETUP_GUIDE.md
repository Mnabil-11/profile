# Profile Website - Setup & Deployment Guide

## Project Structure

```
profile/
├── frontend/          # React app (deployed on Vercel)
│   ├── src/
│   │   ├── config/
│   │   │   └── api.ts          # ✨ API configuration (handles local vs production)
│   │   ├── components/
│   │   │   └── Contact.tsx      # Contact form (updated to use backend)
│   │   └── ...
│   └── package.json
│
└── backend/           # Express server (deployed on Vercel)
    ├── index.js                 # Main server file with email handling
    ├── .env                     # Environment variables (email config)
    ├── .env.example             # Template for env variables
    └── package.json
```

## Quick Start

### Local Development

#### 1. Backend Setup
```bash
cd backend
npm install
```

Update `.env` with your Gmail credentials:
```
USER=your-email@gmail.com
PASS=your-app-specific-password
PORT=5000
```

Start the backend:
```bash
npm run dev
```

#### 2. Frontend Setup
```bash
cd frontend
npm install
```

Set `ACTIVE_ENV` to `'development'` in `frontend/src/config/api.ts` so it points at `http://localhost:5000`.

Start the frontend:
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser and test the contact form!

---

## Gmail Setup (Important!)

The backend uses **Gmail's SMTP** to send emails. Here's how to set it up:

### Step 1: Enable 2-Factor Authentication
1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Scroll to "How you sign in to Google"
3. Enable **2-Step Verification**

### Step 2: Generate App Password
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select **Mail** and **Windows Computer** (or your device)
3. Google will generate a 16-character password
4. Copy this password and use it in `.env` as `PASS`

### Example .env
```
USER=Dev.mnabil@gmail.com
PASS=ftfjrwchbtynuinb
PORT=5000
```

---

## API Configuration

The frontend switches between environments via a **manual flag** in `frontend/src/config/api.ts` — it does not read `.env.local` / `.env.production` or `import.meta.env.MODE`:

```typescript
// Set to 'development' or 'production' to manually switch backend
const ACTIVE_ENV: 'development' | 'production' = 'production'

const API_CONFIG = {
  development: 'http://localhost:5000',
  production: 'https://profile-ihp3.vercel.app'
}
```

### Development (Local)
- Set `ACTIVE_ENV` to `'development'` in `api.ts`
- Contact form sends to: `http://localhost:5000/api/contact`

### Production
- Set `ACTIVE_ENV` to `'production'` in `api.ts`
- Contact form sends to: `https://profile-ihp3.vercel.app/api/contact`

**To point at a different backend**, edit the `production` value in `API_CONFIG` directly and commit the change — there is no separate env file to update.

---

## Deployment to Vercel

### Deploy Frontend
```bash
cd frontend
npm run build
# Push to GitHub, Vercel will auto-deploy
```

### Deploy Backend
```bash
cd backend
npm run build  # (if using TypeScript, not needed for JS)
# Push to GitHub, Vercel will auto-deploy
```

#### Vercel Environment Variables (Backend)
Add these in Vercel dashboard → Settings → Environment Variables:

```
USER=your-email@gmail.com
PASS=your-app-specific-password
PORT=5000
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

---

## API Endpoints

### Contact Form Submission
**POST** `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to connect!"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response (Error):**
```json
{
  "error": "All fields are required"
}
```

### Health Check
**GET** `/api/health`

Returns: `{ "status": "ok" }`

---

## Features

✅ **Dynamic Environment Configuration** - Frontend automatically uses correct backend URL
✅ **Email Notifications** - Sends confirmation email to user + notification to admin
✅ **CORS Enabled** - Works with both local and production frontend
✅ **Error Handling** - User-friendly error messages
✅ **Loading States** - Button shows spinner while submitting
✅ **Form Validation** - Client-side validation of required fields

---

## Troubleshooting

### Contact form not sending?
1. Check backend is running: `http://localhost:5000/api/health`
2. Check `.env` has correct Gmail credentials
3. Check browser console for network errors
4. Ensure CORS allows your frontend origin

### "Failed to send email" error?
1. Verify Gmail app password is correct
2. Check if 2FA is enabled on Gmail
3. Verify sender email address is correct

### Frontend can't find backend?
1. Check `ACTIVE_ENV` in `frontend/src/config/api.ts` is set correctly
2. Ensure backend is running on port 5000
3. Check CORS configuration in `backend/index.js`

---

## File Breakdown

### `frontend/src/config/api.ts`
Centralized configuration for API endpoints. Uses the correct backend URL based on the manually-set `ACTIVE_ENV` flag (see [API Configuration](#api-configuration) above).

### `frontend/src/components/Contact.tsx`
Updated Contact form that:
- Sends data to backend via `ENDPOINTS.contact`
- Shows loading spinner while submitting
- Displays error/success messages
- Disables form during submission

### `backend/index.js`
Express server that:
- Handles POST requests to `/api/contact`
- Validates form data
- Sends two emails (confirmation to user + notification to admin)
- Includes CORS for both local and production frontends

---

## Next Steps

1. ✅ Test locally with `npm run dev` in both folders
2. Update the `production` URL in `frontend/src/config/api.ts` with the real Vercel backend URL
3. Deploy to Vercel (connect GitHub repo)
4. Test production form submission
5. Monitor email delivery in Gmail

---

## Security Notes

- Never commit `.env` file (it's in `.gitignore`)
- Use `.env.example` as a template
- App passwords are more secure than regular Gmail passwords
- Consider rate limiting for production deployment
