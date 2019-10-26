import * as React from 'react';
import { Movie } from '../models/movie';
import { getMoviesByTitle } from '../api/searchTitle';

const useMovieCollection = () => {
    const [movieCollection, setMovieCollection] = React.useState<Movie[]>([]);

    const loadMovieCollection = () => {
        getMoviesByTitle().then(movies => setMovieCollection(movies));
    };

    return { movieCollection, loadMovieCollection };
};

export const MovieSearchResults = () => {
    const { movieCollection, loadMovieCollection } = useMovieCollection();

    React.useEffect(() => {
        loadMovieCollection();
    });

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Overview</th>
                    </tr>
                </thead>
                <tbody>
                    {movieCollection.map(movie => (
                        <MovieRow key={movie.id} movie={movie} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

const MovieRow = ({ movie }: { movie: Movie }) => (
    <tr>
        <td>
            <span>{movie.title}</span>
        </td>
        <td>
            <span>{movie.release_date}</span>
        </td>
        <td>
            <span>{movie.overview}</span>
        </td>
    </tr>
);
