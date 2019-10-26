/* eslint-disable @typescript-eslint/camelcase */
import Axios, { AxiosResponse } from 'axios';
import { Movie } from '../models/movie';
import { MovieDBResponse } from '../models/movieDBResponse';

const baseUrl = 'https://api.themoviedb.org';
const exampleTitleUrl = `${baseUrl}/3/search/movie?query=John+Wick&api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;

const mapResultsToMovieModel = ({
    data,
}: AxiosResponse<MovieDBResponse>): Movie[] =>
    data.results.map(el => ({
        popularity: el.popularity,
        vote_count: el.vote_count,
        video: el.video,
        poster_path: el.poster_path,
        id: el.id,
        adult: el.adult,
        backdrop_path: el.backdrop_path,
        original_language: el.original_language,
        original_title: el.original_title,
        genre_ids: el.genre_ids,
        title: el.title,
        vote_average: el.vote_average,
        overview: el.overview,
        release_date: el.release_date,
    }));

export const getMoviesByTitle = (): Promise<Movie[]> => {
    const promise = new Promise<Movie[]>((resolve, reject) => {
        try {
            Axios.get<MovieDBResponse>(exampleTitleUrl).then(response =>
                resolve(mapResultsToMovieModel(response))
            );
        } catch (ex) {
            reject(ex);
        }
    });

    return promise;
};
