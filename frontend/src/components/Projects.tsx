import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { motion } from 'framer-motion'

const sampleProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack web application built with React, TypeScript, and Firebase. Features include product catalog, shopping cart, and payment integration.',
    link: '#',
    tags: ['React', 'TypeScript', 'Firebase']
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, user authentication, and team collaboration features.',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard displaying real-time data with charts, filters, and export capabilities.',
    link: '#',
    tags: ['React', 'D3.js', 'API']
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Responsive portfolio website showcasing projects and skills with modern design patterns.',
    link: '#',
    tags: ['React', 'MUI', 'TypeScript']
  }
]

export default function Projects() {
  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center', fontWeight: 700, color: '#0F172A' }}>
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {sampleProjects.map((p, idx) => (
          <Grid item xs={12} sm={6} key={p.title}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#FFFFFF',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 16px 32px rgba(37,99,235,0.2)',
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
                          bgcolor: '#EFF6FF',
                          color: '#1D4ED8',
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
                <Button size="small" href={p.link} startIcon={<VisibilityIcon />} sx={{ color: '#2563EB' }}>
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
