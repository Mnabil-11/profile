import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function Hero() {
  return (
    <Box sx={{ textAlign: 'center', py: 10, position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255,235,238,0.3) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1,
        }}
      />
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          color: '#d32f2f',
          fontWeight: 'bold',
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        Mohammed Alyousefi
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        paragraph
        sx={{ mb: 2, animation: `${fadeIn} 1s ease-out 0.3s`, animationFillMode: 'forwards', opacity: 0 }}
      >
        Computer Science Student & Aspiring Software Developer
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        paragraph
        sx={{ mb: 4, maxWidth: 600, mx: 'auto', lineHeight: 1.8, animation: `${fadeIn} 1s ease-out 0.6s`, animationFillMode: 'forwards', opacity: 0 }}
      >
        Passionate about building modern web applications with React, TypeScript, and cloud technologies. Focused on creating intuitive user experiences and writing clean, maintainable code.
      </Typography>
      <Box sx={{ mt: 4, animation: `${fadeIn} 1s ease-out 0.9s`, animationFillMode: 'forwards', opacity: 0 }}>
        <Button
          variant="contained"
          color="error"
          href="mailto:mohammed.alyousefi@example.com"
          sx={{ mr: 2, mb: 1, fontWeight: 'bold', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}
        >
          Contact Me
        </Button>
        <Button
          variant="outlined"
          disabled
          sx={{ mb: 1, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}
        >
          Resume (Coming Soon)
        </Button>
      </Box>
    </Box>
  );
}
