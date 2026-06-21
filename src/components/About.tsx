import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

export default function About() {
  return (
    <Box component="section" sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, color: '#d32f2f', fontWeight: 'bold' }}>
        About Me
      </Typography>
      <Paper sx={{ p: 3, bgcolor: '#f5f5f5', borderLeft: '4px solid #d32f2f' }}>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#333' }}>
          I am Mohammed Alyousefi, a dedicated Computer Science student with a passion for web development 
          and software engineering. I enjoy solving complex problems and creating elegant solutions using 
          modern technologies.
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#333' }}>
          My journey in tech has equipped me with strong foundations in data structures, algorithms, and 
          system design. I'm particularly interested in full-stack web development and cloud technologies. 
          When I'm not coding, you can find me learning new frameworks, contributing to open-source projects, 
          or exploring the latest tech trends.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#333' }}>
          I'm actively looking for internships and entry-level opportunities to apply my skills and grow 
          as a developer in a collaborative environment.
        </Typography>
      </Paper>
    </Box>
  )
}
