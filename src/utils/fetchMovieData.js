import { useState, useEffect } from 'react'

/**
 * @param {string} title
 * @param {string} type valid options [movie, series, episode]
 * @return {array} movie list
 */

const useFetchMovieData = async (title, type = 'movie', page = 1) => {
    let movieList = []
    let totalResults = 0
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}&type=${type}&page=${page}`)
        
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)

        const _data = await res.json()
        
        if (_data.Response === 'True' && _data.Search) {
            movieList = _data.Search
            totalResults = _data.totalResults
        }
    } catch (err) {
        throw err
    }
    return [movieList, totalResults]
}

export default useFetchMovieData