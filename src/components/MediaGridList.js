import React from 'react'
import pt from 'prop-types'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const MediaGridList = ({ mediaData, handleButtonClick }) => {
    if (mediaData.length === 0) return <Typography>Search an existing movie</Typography>

    return (
        <Grid container spacing={3}>
              {
                mediaData.map((data) => {
                  return (
                    <Grid key={`media-grid-list-${data.imdbID}`} item xs={3}>
                      <Card>
                        <CardActionArea onClick={handleButtonClick}>
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

MediaGridList.propTypes = {
    mediaData: pt.arrayOf(pt.shape({
      Poster: pt.string,
      Title: pt.string.isRequired,
      Type: pt.string.isRequired,
      Year: pt.string,
      imdbID: pt.string
    })),
    handleButtonClick: pt.func
}

MediaGridList.defaultProps = {
    mediaData: [],
    handleButtonClick: () => {}
}

export default MediaGridList