import { useState, useEffect } from 'react'

const useFetchMovieData = async (title) => {
    let movieList = []
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}&type=movie`)

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