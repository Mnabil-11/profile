import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

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
        <Avatar
          sx={{
            width: 40,
            height: 40,
            mr: 2,
            bgcolor: '#2563EB',
            fontWeight: 700,
            fontSize: '1.1rem',
          }}
        >
          MA
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 800, letterSpacing: 0.3, color: '#0F172A' }}
          >
            Mohammed Alyousefi
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              color: '#475569',
              fontSize: '0.75rem',
            }}
          >
            Software Engineer & Data Scientist
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
