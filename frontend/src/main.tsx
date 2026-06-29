import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB', // Professional tech blue
    },
    secondary: {
      main: '#475569', // Slate gray for secondary elements
    },
    text: {
      primary: '#0F172A', // Slate 900 for headings and primary text
      secondary: '#475569', // Slate 600 for secondary/description text
    },
    background: {
      default: '#F8FAFC', // Soft off-white/light gray background
      paper: '#FFFFFF', // Pure white for cards/paper elements
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12, // Modern rounded corners
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.1)',
    '0 4px 6px rgba(0,0,0,0.07)',
    '0 4px 8px rgba(0,0,0,0.08)',
    '0 6px 12px rgba(0,0,0,0.1)',
    '0 8px 16px rgba(0,0,0,0.12)',
    ...Array(19).fill('0 10px 20px rgba(0,0,0,0.1)'),
  ] as any,
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
