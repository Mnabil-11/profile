// Set to 'development' or 'production' to manually switch backend
const ACTIVE_ENV: 'development' | 'production' = 'production'

const API_CONFIG = {
  // Local development backend
  development: 'http://localhost:5000',
  // Production backend hosted on Vercel
  production: 'https://profile-ihp3.vercel.app'
}

export const API_BASE_URL = API_CONFIG[ACTIVE_ENV]

export const ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`
}

export default { API_BASE_URL, ENDPOINTS }
