import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import BuildIcon from '@mui/icons-material/Build'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Full-Stack Web Development',
    icon: <CodeIcon sx={{ color: '#2563EB' }} />,
    skills: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'HTML5 & CSS3', level: 'Advanced' },
      { name: 'Material-UI', level: 'Advanced' },
    ],
  },
  {
    category: 'Data Engineering & Visualization',
    icon: <StorageIcon sx={{ color: '#2563EB' }} />,
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Pandas', level: 'Advanced' },
      { name: 'Data Pipelines', level: 'Intermediate' },
      { name: 'D3.js', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
    ],
  },
  {
    category: 'Artificial Intelligence',
    icon: <SmartToyIcon sx={{ color: '#2563EB' }} />,
    skills: [
      { name: 'Machine Learning', level: 'Intermediate' },
      { name: 'NumPy', level: 'Advanced' },
      { name: 'Numerical Methods', level: 'Advanced' },
      { name: 'Algorithm Design', level: 'Advanced' },
    ],
  },
  {
    category: 'Tools & Engineering Practices',
    icon: <BuildIcon sx={{ color: '#2563EB' }} />,
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Vite', level: 'Advanced' },
      { name: 'System Design', level: 'Intermediate' },
      { name: 'Software Engineering', level: 'Advanced' },
    ],
  },
]

export default function Skills() {
  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, color: '#0F172A', fontWeight: 700 }}>
        Technical Skills
      </Typography>
      <Grid container spacing={3}>
        {skillCategories.map((cat, idx) => (
          <Grid item xs={12} sm={6} md={3} key={cat.category}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              sx={{
                height: '100%',
                bgcolor: '#FFFFFF',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 12px 28px rgba(37,99,235,0.18)',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  {cat.icon}
                  <Typography variant="h6" sx={{ color: '#0F172A', fontWeight: 700, fontSize: '1.05rem' }}>
                    {cat.category}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {cat.skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      label={`${skill.name} — ${skill.level}`}
                      sx={{
                        bgcolor: '#EFF6FF',
                        color: '#1D4ED8',
                        fontWeight: 600,
                        justifyContent: 'flex-start',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
