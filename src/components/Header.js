import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import userIcon from '../assets/red-circle-logout-arrow-20586.svg'
import logo from '../assets/AI-MOVIES.png'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { clearGptMovieResult, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = ({displaySignOutFn,hasSignedIn}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const handleButtonClick=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      displaySignOutFn();
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
      const {uid,email,displayName} = user;
      dispatch(
        addUser({
          uid:uid, 
          email:email,    
          displayName: displayName
        })
        );
      navigate('/browse');
      } else {
      dispatch(removeUser());
      navigate('/');
      }
    });

    // Unsubscribe when the component unmounts
    return ()=>unsubscribe();
  },[])

  const handleGptSearchClick = ()=>
    // toggle GPT Search button
  {
    dispatch(toggleGptSearchView());
    dispatch(clearGptMovieResult())
  }

  const handleLanguageChange = (e)=>{
      dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
        <img className='w-44 mx-auto md:mx-0' src={logo} alt="logo" />

        {hasSignedIn && 
          <div className='flex justify-between p-2'>
          {showGptSearch && <select onChange={handleLanguageChange} className='p-2 bg-gray-900 m-2 text-white'>
            {SUPPORTED_LANGUAGES.map(lang=><option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
          </select>}
          
          <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2' onClick={handleGptSearchClick}>{showGptSearch ? "Homepage":"GPT Search"}</button>
        
          <button className='font-bold text-white' onClick={handleButtonClick}><img className='w-12 h-12' src={userIcon} /></button>
         
        </div>
        }
        
    </div>
    
  )
}

export default Header