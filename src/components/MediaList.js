import React from 'react'
import pt from 'prop-types'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemButton from '@mui/material/ListItemButton'

const MediaList = ({ mediaData, handleButtonClick }) => {
    if (mediaData.length === 0) return <div>Search an existing movie</div>
    return (
        <List>
            {
                mediaData.map((data) => {
                    return (
                        <ListItem key={`media-list-${data.imdbID}`} disablePadding>
                            <ListItemButton onClick={handleButtonClick}>
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

MediaList.propTypes = {
    mediaData: pt.arrayOf(pt.shape({
        Poster: pt.string,
        Title: pt.string.isRequired,
        Type: pt.string.isRequired,
        Year: pt.string,
        imdbID: pt.string
    })),
    handleButtonClick: pt.func
}

MediaList.defaultProps = {
    mediaData: [],
    handleButtonClick: () => {}
}

export default MediaList