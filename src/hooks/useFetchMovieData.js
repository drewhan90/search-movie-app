import _ from 'lodash'
import { useState, useEffect, useMemo } from 'react'

import fetchMovieData from '../utils/fetchMovieData'

/**
 * @param {string} type valid options [movie, series, episode]
 */

const useFetchMovieData = (type = 'movie') => {
    const [title, setTitle] = useState('')
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
          const [movieList, totalResults] = await fetchMovieData(title, type, page)
          setMovieData(movieList)
          setPageCount(Math.round(totalResults / 10))
        }
        fetchMovie()
    }, [title, page])

    const handlers = useMemo(() => ({
        handleSearch: _.debounce((e) => {
            const { value } = e.target
            setTitle(value)
            setPage(1)
        }, 300),
        handlePageChange: _.debounce((e, value) => {
            setPage(value)
        }, 300)
    }), [])

    return [{ title, page, pageCount, movieData }, handlers]
}

export default useFetchMovieData