import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { MovieDBResponse } from '../models/movieDBResponse';
const baseUrl = 'https://api.themoviedb.org';

type State =
    | { status: 'empty' }
    | { status: 'loading' }
    | { status: 'error'; error: string }
    | { status: 'success'; data: MovieDBResponse };

type Action =
    | { type: 'request' }
    | { type: 'success'; results: MovieDBResponse }
    | { type: 'failure'; error: string };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'request':
            return { status: 'loading' };
        case 'success':
            return { status: 'success', data: action.results };
        case 'failure':
            return { status: 'error', error: action.error };
    }
}

export const MovieSearch = () => {
    const [query, setQuery] = useState<string>();
    const [state, dispatch] = useReducer(reducer, { status: 'empty' });

    useEffect(() => {
        let ignore = false;

        dispatch({ type: 'request' });
        axios(
            `${baseUrl}/3/search/movie?query=John+Wick&api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`
        ).then(
            results => {
                if (!ignore)
                    dispatch({ type: 'success', results: results.data });
            },
            error => dispatch({ type: 'failure', error })
        );

        return () => {
            ignore = true;
        };
    }, [query]);

    return (
        <div>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            {state.status === 'loading' && <span>Loading...</span>}
            {state.status === 'success' && (
                <ul>
                    {state.data &&
                        state.data.results &&
                        state.data.results.map(item => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                            </li>
                        ))}
                </ul>
            )}
            {state.status === 'error' && <span>Error: {state.error}</span>}
        </div>
    );
};
