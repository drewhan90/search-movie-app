import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemButton from '@mui/material/ListItemButton'

export default function Index() {
  const [movieData, setMovieData] = useState()
  const onSearch = async (e) => {
    try {
      const { value } = e.target
      const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${value}&type=movie`)

      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)

      const data = await res.json()

      if (data.Response === 'True' && data.Search) {
        console.log({ data })
        setMovieData(data.Search)
      }
    } catch (err) {
      throw err
    }
  }
  return (
    <Container>
      <Box>
        <TextField onChange={onSearch} />
        <List>
          {
            movieData && movieData.map((data) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar src={data.Poster} alt={data.Title} />
                    </ListItemAvatar>
                    <ListItemText primary={data.Title} secondary={data.Year} />
                  </ListItemButton>
                </ListItem>
              )
            })
          }
        </List>
      </Box>
    </Container>
  )
}