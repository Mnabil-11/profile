import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import InsightsIcon from '@mui/icons-material/Insights'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Data Science & ML',
    icon: <InsightsIcon sx={{ color: '#4F46E5' }} />,
    skills: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Matplotlib'],
  },
  {
    category: 'API & Deployment',
    icon: <CloudQueueIcon sx={{ color: '#4F46E5' }} />,
    skills: ['FastAPI', 'Docker'],
  },
  {
    category: 'Web Development',
    icon: <CodeIcon sx={{ color: '#4F46E5' }} />,
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: <StorageIcon sx={{ color: '#4F46E5' }} />,
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Prisma ORM'],
  },
  {
    category: 'Version Control',
    icon: <GitHubIcon sx={{ color: '#4F46E5' }} />,
    skills: ['Git', 'GitHub'],
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
          <Grid item xs={12} sm={6} md={4} key={cat.category}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              sx={{
                height: '100%',
                bgcolor: '#FFFFFF',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 12px 28px rgba(79,70,229,0.18)',
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
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {cat.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: '#EEF2FF',
                        color: '#4338CA',
                        fontWeight: 600,
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
