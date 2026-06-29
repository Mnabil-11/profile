import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Material-UI', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'MongoDB', 'Firebase', 'Express.js', 'REST APIs']
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'VS Code', 'Vite', 'npm', 'Figma']
  }
]

export default function Skills() {
  return (
    <Box component="section" sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, color: '#0F172A', fontWeight: 'bold' }}>
        Technical Skills
      </Typography>
      <Grid container spacing={2}>
        {skillCategories.map((cat) => (
          <Grid item xs={12} sm={6} md={3} key={cat.category}>
            <Card sx={{ height: '100%', border: '2px solid #EFF6FF', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#2563EB', fontWeight: 'bold', mb: 2 }}>
                  {cat.category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {cat.skills.map((skill) => (
                    <Typography
                      key={skill}
                      variant="body2"
                      sx={{
                        bgcolor: '#EFF6FF',
                        color: '#2563EB',
                        p: 1,
                        borderRadius: 1,
                        fontWeight: 'bold',
                        textAlign: 'center'
                      }}
                    >
                      {skill}
                    </Typography>
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
