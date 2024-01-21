import React, { useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const [hasSignedIn,setHasSignedIn] = useState(true);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

  //Fetch data from TMDB API and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div className='relative'>
      <Header hasSignedIn={hasSignedIn} displaySignOutFn={()=>setHasSignedIn(false)}/>
      {
        showGptSearch ? <GptSearch/>: <>
        <MainContainer />
        <SecondaryContainer />
        </>
      }
  
      
      {/* 
        MainContainer
          - VideoBackground
          - VideoTitle
        Secondary Container
           - MovieList * n
              - Cards * n
       */}
    </div>
  )
}

export default Browse