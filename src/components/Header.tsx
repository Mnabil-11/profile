import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(135deg, #212121 0%, #000000 100%)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
      <Toolbar>
        <CodeIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}>
          Mohammed Alyousefi
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.5 }}>
          Software Developer Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
