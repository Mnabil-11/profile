import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You can integrate with Formspree or your own backend here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, color: '#212121', fontWeight: 'bold' }}>
        Get In Touch
      </Typography>
      
      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Thanks for reaching out! I'll get back to you soon.
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          p: 3,
          border: '2px solid #e0e0e0',
          borderRadius: 2,
          bgcolor: '#fafafa'
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
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#212121'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#212121'
                }
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#212121'
              }
            }}
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
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#212121'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#212121'
                }
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#212121'
              }
            }}
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
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#212121'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#212121'
                }
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#212121'
              }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ fontWeight: 'bold', py: 1.5, bgcolor: '#212121', '&:hover': { bgcolor: '#000000' } }}
          >
            Send Message
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
