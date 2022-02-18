import React from 'react'
import pt from 'prop-types'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const MediaGridList = ({ mediaData }) => {
    if (mediaData.length === 0) return <div>Search an existing movie</div>

    return (
        <Grid container spacing={3}>
              {
                mediaData.map((data) => {
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

MediaGridList.propTypes = {
    mediaData: pt.array.isRequired
}

MediaGridList.defaultProps = {
    mediaData: []
}

export default MediaGridList