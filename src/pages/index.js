import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function Index() {
  const onSearch = async (e) => {
    try {
      const { value } = e.target
      const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${value}`)
      const data = await res.json()
    } catch (err) {
      throw err
    }
  }
  return (
    <Container>
      <Box>
        <TextField onChange={onSearch} />
      </Box>
    </Container>
  )
}