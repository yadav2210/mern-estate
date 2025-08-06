import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from '../redux/user/userSlice';
 


const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: '',
  });

  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserStart());

    try {
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // <-- Add this line
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data.user));
      setUpdateSuccess(true);
    } catch (err) {
      dispatch(
        updateUserFailure('An error occurred while updating the profile.')
      );
      console.error('Profile update error:', err);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center'>Profile</h1>

      <form className='flex flex-col gap-4 mt-5' onSubmit={handleSubmit}>
        <img
          src={currentUser.avatar}
          alt='Profile'
          className='w-32 h-32 rounded-full mx-auto my-4 object-cover'
        />

        <input
          type='text'
          id='username'
          placeholder='Username'
          className='border p-3 rounded-lg'
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type='email'
          id='email'
          placeholder='Email'
          className='border p-3 rounded-lg'
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type='password'
          id='password'
          placeholder='New Password'
          className='border p-3 rounded-lg'
          value={formData.password}
          onChange={handleChange}
        />

        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-50'
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>

      {error && <p className='text-red-700 text-center mt-3'>{error}</p>}
      {updateSuccess && (
        <p className='text-green-600 text-center mt-3'>
          Profile updated successfully!
        </p>
      )}

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  );
};



export default Profile;
