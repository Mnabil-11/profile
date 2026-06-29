import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';

export default function Header() {
  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      <Toolbar>
        <CodeIcon sx={{ mr: 1, color: '#2563EB' }} />
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold', 
            letterSpacing: 1,
            color: '#0F172A',
          }}
        >
          Mohammed Alyousefi
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: 0.5,
            color: '#475569',
          }}
        >
          Software Developer Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
