import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ textAlign: 'center', py: 4, mt: 6, bgcolor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        <IconButton
          href="https://github.com/Mnabil-11"
          target="_blank"
          rel="noopener"
          sx={{ color: '#0F172A', '&:hover': { color: '#4F46E5' } }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/mohmmaed-nabil-933a44365/"
          target="_blank"
          rel="noopener"
          sx={{ color: '#0F172A', '&:hover': { color: '#4F46E5' } }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://wa.link/rstkkp"
          target="_blank"
          rel="noopener"
          sx={{ color: '#0F172A', '&:hover': { color: '#4F46E5' } }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Mohammed Alyousefi. All Rights Reserved.
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Built with React + TypeScript + Material-UI
      </Typography>
    </Box>
  )
}
