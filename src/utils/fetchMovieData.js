import { useState, useEffect } from 'react'

/**
 * @param {string} title
 * @param {string} type valid options [movie, series, episode]
 * @return {array} movie list
 */

const useFetchMovieData = async (title, type = 'movie') => {
    let movieList = []
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}&type=${type}`)

        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)

        const _data = await res.json()

        if (_data.Response === 'True' && _data.Search) {
            movieList = _data.Search
        }
    } catch (err) {
        throw err
    }
    return movieList
}

export default useFetchMovieData