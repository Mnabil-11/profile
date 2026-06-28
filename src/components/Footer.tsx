import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

export default function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 4, mt: 6, bgcolor: '#f5f5f5', borderTop: 2, borderColor: '#212121' }}>
      <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 3 }}>
        <Link href="https://github.com" target="_blank" rel="noopener" sx={{ fontWeight: 'bold', color: '#212121', '&:hover': { color: '#000000' } }}>
          GitHub
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener" sx={{ fontWeight: 'bold', color: '#212121', '&:hover': { color: '#000000' } }}>
          LinkedIn
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener" sx={{ fontWeight: 'bold', color: '#212121', '&:hover': { color: '#000000' } }}>
          Twitter
        </Link>
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
