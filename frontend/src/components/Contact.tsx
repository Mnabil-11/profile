import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { motion } from 'framer-motion'
import { ENDPOINTS } from '../config/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(ENDPOINTS.contact, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const focusStyles = {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': { borderColor: '#2563EB' },
      '&.Mui-focused fieldset': { borderColor: '#2563EB' },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#2563EB' },
  }

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          p: { xs: 4, md: 6 },
          mb: 5,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
          boxShadow: '0 20px 40px rgba(37,99,235,0.3)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-30%',
            right: '-10%',
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
          }}
        />
        <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 1.5 }}>
          Let's Build Something Great
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520, mx: 'auto', mb: 3, lineHeight: 1.8 }}
        >
          Have an opportunity, project, or just want to connect? I usually reply fastest on WhatsApp.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          endIcon={<ArrowForwardIcon />}
          href="https://wa.link/rstkkp"
          target="_blank"
          rel="noopener"
          sx={{
            fontWeight: 700,
            px: 4,
            py: 1.3,
            bgcolor: '#FFFFFF',
            color: '#1D4ED8',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              bgcolor: '#F8FAFC',
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
            },
          }}
        >
          Chat on WhatsApp
        </Button>
      </Box>

      <Typography variant="h5" component="h2" sx={{ mb: 1, color: '#0F172A', fontWeight: 700 }}>
        Or Send a Message
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        <Tooltip title="GitHub">
          <IconButton
            href="https://github.com/Mnabil-11"
            target="_blank"
            rel="noopener"
            sx={{ color: '#0F172A', '&:hover': { color: '#2563EB' } }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            href="https://www.linkedin.com/in/mohammed-alyousefi"
            target="_blank"
            rel="noopener"
            sx={{ color: '#0F172A', '&:hover': { color: '#2563EB' } }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email">
          <IconButton
            href="mailto:dev.mnabil@gmail.com"
            sx={{ color: '#0F172A', '&:hover': { color: '#2563EB' } }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </IconButton>
        </Tooltip>
        <Tooltip title="WhatsApp">
          <IconButton
            href="https://wa.link/rstkkp"
            target="_blank"
            rel="noopener"
            sx={{ color: '#0F172A', '&:hover': { color: '#2563EB' } }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Thanks for reaching out! I'll get back to you soon.
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          p: 3,
          border: '1px solid #E2E8F0',
          borderRadius: 2,
          bgcolor: '#FFFFFF'
        }}
      >
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
            disabled={loading}
            sx={focusStyles}
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
            disabled={loading}
            sx={focusStyles}
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            variant="outlined"
            disabled={loading}
            sx={focusStyles}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            sx={{
              fontWeight: 700,
              py: 1.5,
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 8px 20px rgba(37,99,235,0.25)',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 24px rgba(37,99,235,0.35)',
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
