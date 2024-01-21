import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const GptSearch = () => {
  const {pressedSearch,movieResults} = useSelector(store=>store.gpt)
  return (
    <>
    <img className='fixed -z-10 h-screen object-cover md:w-screen ' src={BG_URL} alt='back'></img>
    <div className='pt-[30%] md:p-0'>
         
        <GptSearchBar/>
        {pressedSearch && !movieResults ? <Loading/>:<GptMovieSuggestions/>}
        
    </div>
    </>
  )
}

export default GptSearch