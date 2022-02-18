import React from 'react'
import pt from 'prop-types'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemButton from '@mui/material/ListItemButton'

const MediaListItem = ({ mediaData }) => {
    if (mediaData.length === 0) return <div>Search an existing movie</div>

    return (
        <List>
            {
                mediaData.map((data) => {
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
    )
}

MediaListItem.propTypes = {
    mediaData: pt.array.isRequired
}

export default MediaListItem