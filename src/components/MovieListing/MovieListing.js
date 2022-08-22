import React from 'react';
import { useSelector } from 'react-redux';
import MovieCade from '../MovieCard/MovieCard'
import { getAllMovies } from '../../features/movies/mvoieSlice';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    let renderMovies = ""
     
    renderMovies = movies.reponse === 'true' ? (
        movies.search.map((movie, index) => {
            <MovieCade key={index} data={movie}/>
        })
    ):(
            <div className='movies-error'>
                <h3>{movies.error}</h3>
            </div>
        );
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{renderMovies}</div>
            </div>
        </div>
    );
};

export default MovieListing;