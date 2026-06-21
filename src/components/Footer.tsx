import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

export default function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 4, mt: 6, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        <Link href="https://github.com" target="_blank" rel="noopener">
          GitHub
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener">
          LinkedIn
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener">
          Twitter
        </Link>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Your Name. Built with React + MUI.
      </Typography>
    </Box>
  )
}
