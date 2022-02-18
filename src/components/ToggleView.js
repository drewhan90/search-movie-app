import React from 'react'
import pt from 'prop-types'

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import { List as ListIcon, GridView as GridViewIcon } from '@mui/icons-material'

const ToggleView = ({ view, handleView }) => {
    return (
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
    )
}

ToggleView.propTypes = {
    view: pt.oneOf(['grid', 'list'])
}

ToggleView.defaultProps = {
    view: 'grid'
}

export default ToggleView