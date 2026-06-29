import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
} as const;

export default function Hero() {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{ textAlign: 'center', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(248,250,252,0) 65%)',
          zIndex: -1,
        }}
      />

      <Box component={motion.div} variants={itemVariants}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ color: '#0F172A', fontWeight: 800, letterSpacing: -0.5 }}
        >
          Mohammed Alyousefi
        </Typography>
      </Box>

      <Box component={motion.div} variants={itemVariants}>
        <Typography variant="h5" sx={{ mb: 2, color: '#2563EB', fontWeight: 600 }}>
          Senior CSE Student @ Qassim University
        </Typography>
      </Box>

      <Box component={motion.div} variants={itemVariants}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 640, mx: 'auto', lineHeight: 1.8 }}
        >
          Senior Computer Science and Engineering student at Qassim University, graduating in 2026.
          Passionate about Full-Stack Web Development, Data Engineering &amp; Visualization, and
          Artificial Intelligence — building clean, scalable, and intelligent software.
        </Typography>
      </Box>

      <Box component={motion.div} variants={itemVariants}>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" sx={{ mb: 2 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            href="https://wa.link/rstkkp"
            target="_blank"
            rel="noopener"
            sx={{
              fontWeight: 700,
              px: 3,
              boxShadow: '0 8px 20px rgba(37,99,235,0.25)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 24px rgba(37,99,235,0.35)',
              },
            }}
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<DownloadIcon />}
            href="/Mohammed_Alyousefi_CV.pdf"
            download="Mohammed_Alyousefi_CV.pdf"
            sx={{
              fontWeight: 700,
              px: 3,
              borderColor: '#2563EB',
              color: '#2563EB',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                borderColor: '#1D4ED8',
                background: 'rgba(37,99,235,0.04)',
              },
            }}
          >
            Download CV
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
