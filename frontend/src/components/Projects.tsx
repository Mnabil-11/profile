import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'House Price Prediction',
    description: 'End-to-end ML pipeline predicting house sale prices from the Ames Housing dataset — data cleaning, feature engineering, model comparison, and a containerized FastAPI prediction endpoint with SHAP-based explainability.',
    link: 'https://github.com/Mnabil-11/house-price-prediction',
    tags: ['Python', 'XGBoost', 'FastAPI', 'Docker']
  },
  {
    title: 'Football Stats Tracker',
    description: 'Full-stack football companion app that merges two data providers with fuzzy matching to enrich match, player, and standings data. Includes auth, favorites, and a server-side API-key proxy.',
    link: 'https://github.com/Mnabil-11/Football_info',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma']
  },
  {
    title: 'Atmos Weather Dashboard',
    description: 'Bilingual (English/Arabic, full RTL) weather app with offline support via service worker, geolocation auto-detect, and weather-matched background imagery.',
    link: 'https://github.com/Mnabil-11/Weather',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Netflix Data Analysis',
    description: 'Data visualization project analyzing Netflix content library trends, viewing patterns, and regional preferences.',
    link: 'https://github.com/Mnabil-11/Netflix-Data-Analysis',
    tags: ['Python', 'Pandas', 'Matplotlib']
  },
  {
    title: 'HR Management System',
    description: 'Employee management platform for tracking, attendance, and payroll with role-based access control.',
    link: 'https://github.com/Mnabil-11/HR',
    tags: ['Node.js', 'Express', 'MongoDB']
  }
]

export default function Projects() {
  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center', fontWeight: 700, color: '#0F172A' }}>
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((p, idx) => (
          <Grid item xs={12} sm={6} md={4} key={p.title}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#FFFFFF',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 16px 32px rgba(79,70,229,0.2)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#0F172A', fontWeight: 700 }}>
                  {p.title}
                </Typography>
                <Typography color="text.secondary" variant="body2" sx={{ mb: 2 }}>
                  {p.description}
                </Typography>
                {p.tags && (
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {p.tags.map((tag) => (
                      <Typography
                        key={tag}
                        variant="caption"
                        sx={{
                          bgcolor: '#EEF2FF',
                          color: '#4338CA',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          fontWeight: 700
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                )}
              </CardContent>
              <CardActions>
                <Button size="small" href={p.link} target="_blank" rel="noopener" startIcon={<GitHubIcon />} sx={{ color: '#4F46E5' }}>
                  View Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
