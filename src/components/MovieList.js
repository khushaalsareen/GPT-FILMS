import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-6 lg:mt-14 '>
    <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        
        <div className='flex'>
          {
            movies?.map(movie=><MovieCard posterPath={movie.poster_path} key={movie.id}
            />)
          }
        </div>
      </div> 
    </div>
  )
}

export default MovieList