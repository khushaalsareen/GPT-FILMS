import React, { useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useDispatch, useSelector } from 'react-redux';
import { undoSearch } from '../utils/gptSlice';
const Browse = () => {
  const dispatch = useDispatch();
  const [hasSignedIn,setHasSignedIn] = useState(true);
  const {showGptSearch,pressedSearch} = useSelector(store=>store.gpt)
  if(showGptSearch===false)
    dispatch(undoSearch())
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