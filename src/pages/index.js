import React, { useState } from 'react'
import _ from 'lodash'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemButton from '@mui/material/ListItemButton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Search as SearchIcon, List as ListIcon, GridView as GridViewIcon } from '@mui/icons-material'

export default function Index() {
  const [movieData, setMovieData] = useState()
  const [view, setView] = useState('grid')
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
  const handleView = (e, _view) => {
    console.log(_view)
    setView(_view)
  }
  return (
    <Container bg="black">
      <Grid container justifyContent="center" mt={10} mb={6}>
        <Box width={['100%', 0.5, '500px']}>
          <TextField
            onChange={_.debounce(onSearch, 300)}
            placeholder="Search movie by title"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            fullWidth
          />
        </Box>
      </Grid>
      <Box>
        <Box mb={3}>
          <ToggleButtonGroup
            value={view}
            onChange={handleView}
            exclusive
            aria-label="list view"
          >
            <ToggleButton value="grid" aria-label="grid view">
              <GridViewIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="list view">
              <ListIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {
          view === 'list' ? (
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
          ) : (
            <Grid container spacing={3}>
              {
                movieData && movieData.map((data) => {
                  return (
                    <Grid item xs={4}>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height={448}
                            image={data.Poster}
                            alt={data.Title}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div" noWrap>
                              {data.Title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {data.Year}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                })
              }
            </Grid>
          )
        }
      </Box>
    </Container>
  )
}