import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Hero() {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Your Name
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Full-stack software engineer building reliable, user-friendly web applications.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          href="mailto:your.email@example.com"
          sx={{ mr: 2, mb: 1 }}
        >
          Contact Me
        </Button>
        <Button variant="outlined" disabled sx={{ mb: 1 }}>
          Resume (Coming Soon)
        </Button>
      </Box>
    </Box>
  )
}
