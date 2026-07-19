import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import SchoolIcon from '@mui/icons-material/School'
import { motion } from 'framer-motion'

const coursework = [
  { code: 'COE351', name: 'Computer Networks' },
  { code: '', name: 'Numerical Methods' },
  { code: '', name: 'Software Engineering' },
  { code: '', name: 'Data Structures & Algorithms' },
  { code: '', name: 'System Design' },
]

export default function About() {
  return (
    <Box component="section" sx={{ mb: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, color: '#0F172A', fontWeight: 700 }}>
        About Me
      </Typography>
      <Paper sx={{ p: 3, bgcolor: '#FFFFFF', borderLeft: '4px solid #4F46E5' }}>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#334155' }}>
          I'm Mohammed Alyousefi, a Computer Science student specializing in data science and
          machine learning. I build end-to-end ML systems — from exploratory data analysis through
          model deployment via containerized REST APIs — and I also develop full-stack web
          applications using modern JavaScript frameworks.
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#334155' }}>
          My academic foundation in algorithms, system design, and software engineering principles
          guides how I approach problems — designing for scalability and maintainability from the
          start, whether I'm training and serving a model or shipping a full-stack application.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#334155' }}>
          I'm actively seeking internships and entry-level opportunities where I can apply these
          skills and continue growing as an engineer in a collaborative, fast-paced environment.
        </Typography>
      </Paper>

      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{ mb: 3, color: '#0F172A', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <SchoolIcon sx={{ color: '#4F46E5' }} />
          Education &amp; Core Coursework
        </Typography>

        <Paper sx={{ p: 3, mb: 3, bgcolor: '#FFFFFF' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
            Qassim University
          </Typography>
          <Typography variant="body2" color="text.secondary">
            B.Sc. in Computer Science and Engineering — Expected Graduation 2026
          </Typography>
        </Paper>

        <Grid container spacing={2}>
          {coursework.map((course, idx) => (
            <Grid item xs={12} sm={6} md={4} key={course.name}>
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
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A' }}>
                    {course.name}
                  </Typography>
                  {course.code && (
                    <Typography variant="caption" sx={{ color: '#4F46E5', fontWeight: 700 }}>
                      {course.code}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
