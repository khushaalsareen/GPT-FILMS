import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';
const Login = () => {
    const [isSign, setIsSign] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const myName = useRef(null);
    const [errorMessage,setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const toggleSignInForm = ()=>{
        setIsSign(!isSign)
    }
    const handleButtonClick=()=>{
        // validate the form data
        const readName = myName===null? "":myName?.current?.value
     const message = checkValidData(email?.current?.value,password?.current?.value,readName)
     setErrorMessage(message);
     if(message) return;
      
    //  Sign In Sign Up Logic
     if(!isSign){ // isSign is basically isSignInForm
        // Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: myName.current.value, photoURL: USER_AVATAR
        }).then(() => {
            // Profile updated!
            // ...
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email,    displayName: displayName}))
            // navigate('/browse');
          })
        .catch((error) => {
          // An error occurred
          // ...
        });
        // navigate('/browse');
       }).catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)

  });
     }
     else{
         // Sign In Logic
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
           // ...
          //  navigate('/browse');
          
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + "-" + errorMessage);
         });
     }
    }

  return (
    <div>
        <Header/>
        <div className=''>
            <img className='absolute bg-slate-500 h-screen object-cover w-full' src={BG_URL} alt="bgi" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-full md:w-[400px] lg:w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-70'> 
            <h1 className='font-bold text-3xl py-4'>{
                isSign ? "Sign In" : "Sign Up"
            }</h1>
           {isSign ? <></>: <input ref={myName} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input ref={email} type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-500 font-bold py-2 text-lg'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSign ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSign ? "New to Netflix? Sign Up Now" : "Already a user? Sign In"}
            </p>
        </form>
    </div>
  )
}

export default Login