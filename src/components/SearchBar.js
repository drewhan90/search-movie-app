import React from 'react'
import pt from 'prop-types'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { Search as SearchIcon } from '@mui/icons-material'

const SearchBar = ({ handleSearch, placeholder }) => {
    return (
        <Box width={['100%', 0.5, '500px']}>
            <TextField
                onChange={handleSearch}
                placeholder={placeholder}
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
    )
}

SearchBar.propTypes = {
    handleSearch: pt.func.isRequired,
    placeholder: pt.string
}

SearchBar.defaultProps = {
    placeholder: ''
}

export default SearchBar