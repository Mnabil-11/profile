import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import VisibilityIcon from '@mui/icons-material/Visibility'

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
    <Box component="section" sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', color: '#212121' }}>
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {sampleProjects.map((p) => (
          <Grid item xs={12} sm={6} key={p.title}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 20px rgba(33, 33, 33, 0.2)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#212121', fontWeight: 'bold' }}>
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
                          bgcolor: '#e0e0e0',
                          color: '#212121',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          fontWeight: 'bold'
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                )}
              </CardContent>
              <CardActions>
                <Button size="small" href={p.link} startIcon={<VisibilityIcon />}>
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
