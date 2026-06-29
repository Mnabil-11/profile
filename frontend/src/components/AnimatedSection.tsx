import React from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, sx }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default AnimatedSection;
