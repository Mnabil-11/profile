import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const sampleProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React frontend and Node.js backend.',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management app with collaborative features and notifications.',
    link: '#'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for real-time analytics and reporting.',
    link: '#'
  },
  {
    title: 'API Documentation Generator',
    description: 'Automatic API docs generation from OpenAPI/Swagger specs.',
    link: '#'
  }
]

export default function Projects() {
  return (
    <Box component="section" sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        Featured Projects
      </Typography>
      <Grid container spacing={3}>
        {sampleProjects.map((p) => (
          <Grid item xs={12} sm={6} key={p.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {p.title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {p.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={p.link}>
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
