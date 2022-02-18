import React, { useState } from 'react'
import _ from 'lodash'

import Head from 'next/head'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import Divider from '@mui/material/Divider'

import MediaList from '../components/MediaList'
import MediaGridList from '../components/MediaGridList'
import SearchBar from '../components/SearchBar'
import ToggleView from '../components/ToggleView'

import useFetchMovieData from '../hooks/useFetchMovieData'

export default function Index() {
  const [view, setView] = useState('grid')
  const [
    { page, pageCount, movieData },
    { handleSearch, handlePageChange }
  ] = useFetchMovieData('movie')

  const handleView = (e, _view) => {
    setView(_view)
  }
  const handleDisplayLabel = () => {
    console.log('display label!')
  }

  return (
    <Container bg="black">
      <Head>
        <title>Search Movie</title>
      </Head>
      <Grid container justifyContent="center" mt={10} mb={6}>
        <SearchBar handleSearch={handleSearch} placeholder="Search movie by title" />
      </Grid>
      <Box mb={6}>
        <Box mb={3}>
          <ToggleView view={view} handleView={handleView} />
        </Box>
        {
          view === 'list' ? (
            <MediaList mediaData={movieData} handleButtonClick={handleDisplayLabel} />
          ) : (
            <MediaGridList mediaData={movieData} handleButtonClick={handleDisplayLabel} />
          )
        }
        {
          pageCount > 1 && (
            <Box mt={4}>
              <Divider />
              <Box mt={2}>
                <Pagination count={pageCount} page={page} onChange={handlePageChange} />
              </Box>
            </Box>
          )
        }
      </Box>
    </Container>
  )
}