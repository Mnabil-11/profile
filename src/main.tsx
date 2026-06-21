import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#b71c1c',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
