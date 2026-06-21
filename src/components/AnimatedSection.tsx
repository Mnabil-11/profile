import React from 'react';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

interface AnimatedSectionProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, sx }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      {children}
    </Box>
  );
};

export default AnimatedSection;
