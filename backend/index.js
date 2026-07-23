require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const nodemailer = require('nodemailer')

const app = express()

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean)

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: false
}))

app.use(express.json())

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many messages sent. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

const verifyEmail = async () => {
  try {
    await transporter.verify()
    console.log('Email service connected successfully')
  } catch (error) {
    console.error('Email service connection failed:', error.message)
  }
}

verifyEmail()

const escapeHtml = (str) => str
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const safeName = escapeHtml(name)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting me, ${safeName}!`,
      html: `
        <h2>Hello ${safeName},</h2>
        <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
        <hr>
        <h3>Your Message:</h3>
        <p>${safeMessage}</p>
        <hr>
        <p>Best regards,<br>Your Name</p>
      `
    }

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    await transporter.sendMail(adminMailOptions)

    res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.get('/', (req, res) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const emailConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASS ? '✅' : '❌'

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Profile Backend - Health Check</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 40px;
          max-width: 500px;
          width: 100%;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .header h1 {
          color: #667eea;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .status-indicator {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10b981;
          margin-right: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .status-text {
          color: #10b981;
          font-weight: 600;
          font-size: 16px;
        }

        .divider {
          height: 1px;
          background: #e5e7eb;
          margin: 30px 0;
        }

        .info-section {
          margin-bottom: 20px;
        }

        .info-label {
          color: #6b7280;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .info-value {
          color: #1f2937;
          font-size: 14px;
          background: #f3f4f6;
          padding: 12px;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', monospace;
          word-break: break-all;
        }

        .badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-right: 8px;
          margin-bottom: 10px;
        }

        .badge-success {
          background: #d1fae5;
          color: #065f46;
        }

        .badge-error {
          background: #fee2e2;
          color: #991b1b;
        }

        .endpoints {
          margin-top: 20px;
          padding: 15px;
          background: #f9fafb;
          border-radius: 6px;
        }

        .endpoints-title {
          color: #6b7280;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .endpoint {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          font-size: 13px;
        }

        .endpoint:last-child {
          margin-bottom: 0;
        }

        .method {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
          margin-right: 10px;
          min-width: 50px;
          text-align: center;
        }

        .method-get {
          background: #dbeafe;
          color: #1e40af;
        }

        .method-post {
          background: #dcfce7;
          color: #166534;
        }

        .endpoint-path {
          color: #1f2937;
          font-family: 'Monaco', 'Menlo', monospace;
          flex: 1;
        }

        .footer {
          text-align: center;
          margin-top: 30px;
          color: #9ca3af;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Profile Backend</h1>
          <div>
            <span class="status-indicator"></span>
            <span class="status-text">Server is Running</span>
          </div>
        </div>

        <div class="divider"></div>

        <div class="info-section">
          <div class="info-label">Environment</div>
          <span class="badge ${isProduction ? 'badge-success' : 'badge-error'}">
            ${isProduction ? 'Production' : 'Development'}
          </span>
        </div>

        <div class="info-section">
          <div class="info-label">Email Configuration</div>
          <div>${emailConfigured} ${process.env.EMAIL_USER ? 'Configured' : 'Not Configured'}</div>
        </div>

        <div class="divider"></div>

        <div class="endpoints">
          <div class="endpoints-title">Available Endpoints</div>
          <div class="endpoint">
            <span class="method method-get">GET</span>
            <span class="endpoint-path">/</span>
          </div>
          <div class="endpoint">
            <span class="method method-get">GET</span>
            <span class="endpoint-path">/api/health</span>
          </div>
          <div class="endpoint">
            <span class="method method-post">POST</span>
            <span class="endpoint-path">/api/contact</span>
          </div>
        </div>

        <div class="footer">
          ✨ Backend is ready to serve your frontend
        </div>
      </div>
    </body>
    </html>
  `)
})

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
