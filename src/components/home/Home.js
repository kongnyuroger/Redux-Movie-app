import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing'
import MovieAPI from '../../common/apis/MovieAPI'
import { useDispatch } from 'react-redux';
import { APIKey } from '../../common/apis/MovieAPIKey'
import { addMovies } from '../../features/movies/mvoieSlice';

const Home = () => {
    const movieText = 'Harry';
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await MovieAPI.get(
                `?apiKey=${APIKey}&s=${movieText}&type=movie`
                ).catch((err) => {
                    console.log('err :', err)
                })
            dispatch(addMovies(response.data));
        };

        fetchMovies()
    }, [])
    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    );
};

export default Home;