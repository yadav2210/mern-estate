import React from 'react'
import { GoogleAuthProvider,getAuth,signInWithPopup } from 'firebase/auth';
import {app}from '../firebase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess, signInFailure } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';


const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try{
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result=await signInWithPopup(auth, provider);
      const res=await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: result.user.email,
          username: result.user.displayName,
          photo: result.user.photoURL,       }),
      });

      const data = await res.json();
      dispatch (signInSuccess(data.user));
      navigate("/");

      
      console.log("Google sign-in successful:", result);
    }catch(error){
      console.log("Google sign-in error:", error);
    }
  }
  return (

    <div>
      <button  onClick={handleGoogleClick} type="button"
          className="bg-blue-700 text-white p-2 rounded-xl uppercase hover:opacity-90 w-full"
        > CONTINUE with Google</button>
    </div>
  )
}

export default OAuth