import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 0.3, color: '#0F172A' }}
        >
          <Box component="span" sx={{ color: '#2563EB' }}>{'<'}</Box>
          Mohammed Alyousefi
          <Box component="span" sx={{ color: '#2563EB' }}>{'/>'}</Box>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            color: '#475569',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          Software Engineering Student
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
