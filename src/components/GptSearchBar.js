import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult, clearGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang)
  const searchText = useRef(null);
  const dispatch = useDispatch()

  // search movie in TMDB
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
    const json = await data.json();
    return json.results
  }

  const handleGptSearchClick = async()=>{
    
    // Make an API call to GPT API and get Movie Results
    if(searchText.current.value ===""){
      dispatch(clearGptMovieResult())
      return null
    }

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for thr query: " + searchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

   
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",") // gives array of movies

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));
    // [Promise,Promise,Promise,Promise,Promise,]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults: tmdbResults}));
  }

  return (
    <div className='pt-[15%] md:pt-[15%] lg:pt-[10%] flex justify-center'>
        
      <form className='w-[90%] bg-black md:w-1/2 grid grid-cols-12 md:p-0 ' onSubmit={(e)=>e.preventDefault()}>
            
            <input ref={searchText} type="text" className='p-2 m-3 col-span-6 md:p-4 md:m-4 md:col-span-8 lg:col-span-9 md:w-[95%] w-60 font-bold' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button onClick={ handleGptSearchClick} className='ml-20  md:px-4 md:py-2 px-3 md:w-[85%] w-20  m-3 md:m-4 bg-red-600 text-white rounded-md  md:col-span-4 col lg:col-span-3'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar