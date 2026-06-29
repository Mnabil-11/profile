import React from 'react'
import Container from '@mui/material/Container'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Home />
      </Container>
      <Footer />
    </>
  )
}
