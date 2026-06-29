const isDevelopment = import.meta.env.MODE === 'development'

const API_CONFIG = {
  // Local development backend
  development: 'http://localhost:5000',
  // Production backend hosted on Vercel
  production: import.meta.env.VITE_BACKEND_URL || 'https://your-backend-name.vercel.app'
}

export const API_BASE_URL = isDevelopment
  ? API_CONFIG.development
  : API_CONFIG.production

export const ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`
}

export default { API_BASE_URL, ENDPOINTS }
