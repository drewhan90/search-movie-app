import React, { useState } from 'react'
import _ from 'lodash'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Search as SearchIcon, List as ListIcon, GridView as GridViewIcon } from '@mui/icons-material'

import MediaList from '../components/MediaList'
import MediaGridList from '../components/MediaGridList'

import fetchMovieData from '../utils/fetchMovieData'

export default function Index() {
  const [movieData, setMovieData] = useState([])
  const [view, setView] = useState('grid')
  const onSearch = async (e) => {
    const { value } = e.target
    const movieList = await fetchMovieData(value)
    setMovieData(movieList)
  }
  const handleView = (e, _view) => {
    setView(_view)
  }
  const handleDisplayLabel = () => {
    console.log('display label!')
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
            <MediaList mediaData={movieData} handleButtonClick={handleDisplayLabel} />
          ) : (
            <MediaGridList mediaData={movieData} handleButtonClick={handleDisplayLabel} />
          )
        }
      </Box>
    </Container>
  )
}