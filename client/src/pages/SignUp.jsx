import React, { useState } from 'react';
import{ useNavigate } from 'react-router-dom';
import {set} from 'mongoose';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/oAuth';

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Signup successful:", data);
      if(data.success==false){
        setLoading(false);
        setError(data.message);
        return;
       }

       setLoading(false);
       setError(null);

       navigate("/signin");
    } catch (err) {
      setLoading(false);
      setError("An error occurred during signup. Please try again.");
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign Up Page
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90"
        >
          {loading ? "Loading..." : "Sign Up"}
        
        </button>
        <OAuth />

        
      </form>

      <div className="flex gap-2 mt-5">
        <p>HAVE AN ACCOUNT?</p>
        <Link to="/signin" className="text-blue-700 cursor-pointer">
          
        <span className="text-blue-700 cursor-pointer">SIGN IN</span> </Link>
      </div>
      {error && <p className="text-red-500 m">{error}</p>}
    </div>
  );
};

export default SignUp;
