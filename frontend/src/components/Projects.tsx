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

const projects = [
  {
    title: 'Blackjack Game',
    description: 'Interactive web-based Blackjack card game with betting system, AI dealer logic, and responsive UI. Built with modern JavaScript and CSS animations for smooth gameplay experience.',
    link: 'https://github.com/Mnabil-11/blackjack-game',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic']
  },
  {
    title: 'HR Management System',
    description: 'Comprehensive HR management platform for employee tracking, attendance monitoring, and payroll processing. Features role-based access control and real-time reporting dashboards.',
    link: 'https://github.com/Mnabil-11/hr-management',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API']
  },
  {
    title: 'Netflix Data Analysis',
    description: 'Data visualization project analyzing Netflix content library trends, viewing patterns, and regional preferences. Interactive dashboards built with Python and modern visualization libraries.',
    link: 'https://github.com/Mnabil-11/netflix-analysis',
    tags: ['Python', 'Pandas', 'Data Visualization', 'Analytics']
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Modern responsive portfolio showcasing projects and skills with smooth animations, dark mode support, and optimized performance using React and Material-UI.',
    link: 'https://github.com/Mnabil-11/portfolio',
    tags: ['React', 'TypeScript', 'MUI', 'Framer Motion']
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
