/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
export const baseUrl = 'https://api.themoviedb.org';
export default {
    getConfig: () =>
        axios
            .get(`${baseUrl}/3/configuration`, {
                params: { api_key: process.env.REACT_APP_MOVIEDB_API_KEY },
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
    getLatestMovies: () =>
        axios
            .get(`${baseUrl}/3/discover/movie`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
                    primary_release_year: 2017,
                    sort_by: 'popularity.desc',
                },
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
    getGenres: () =>
        axios
            .get(`${baseUrl}/3/genre/movie/list`, {
                params: { api_key: process.env.REACT_APP_MOVIEDB_API_KEY },
            })
            .then(res => res.data.genres)
            .catch(error => console.log(error)),
    getMovieDetails: (id: string) =>
        axios
            .get(`${baseUrl}/3/movie/${id}`, {
                params: { api_key: process.env.REACT_APP_MOVIEDB_API_KEY },
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
    getReviews: (id: string) =>
        axios
            .get(`${baseUrl}/3/movie/${id}/reviews`, {
                params: { api_key: process.env.REACT_APP_MOVIEDB_API_KEY },
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
    getCredits: (id: string) =>
        axios
            .get(`${baseUrl}/3/movie/${id}/credits`, {
                params: { api_key: process.env.REACT_APP_MOVIEDB_API_KEY },
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
    getSimilar: (id: string) =>
        axios
            .get(`${baseUrl}/3/movie/${id}/similar`, {
                params: { api_key: process.env.REACT_APP_MOVIEDB_API_KEY },
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
    Search: (query: string) =>
        axios
            .get(`${baseUrl}/3/search/movie`, {
                params: {
                    query,
                    api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
                },
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
    SearchByGenre: (genre: string) =>
        axios
            .get(`${baseUrl}/3/discover/movie`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
                    with_genres: genre,
                },
            })
            .then(res => res.data)
            .catch(error => console.log(error)),
};
