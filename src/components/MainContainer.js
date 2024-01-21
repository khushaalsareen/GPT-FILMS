import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import Header from './Header'
const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)

    if(movies===null || !movies) return;

    const mainMovie = movies[0]; // before store even existed we are trying to get movies[0] thus can give runtime error
    const {original_title, overview,id} = mainMovie
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
    
  )
}

export default MainContainer