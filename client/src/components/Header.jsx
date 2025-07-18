import React from 'react'
import { FaSearch }  from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <header class="bg-slate -200 shadow-md text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class=" text-slate-700 mr-5 hover: underline text-gray-900" href="/about">About</a>
      <a class="text-slate-700 mr-5 hover: underline text-gray-900" href="/profile">Profile</a>
      <a class="mr-5 hover: underline text-gray-900" href="/signup">Sign Up</a>
      <a class="mr-5 hover: underline text-gray-900" href="/signin">Sign In</a>
    </nav>
    <form class="bg-slate-100 p-3 rounded-lg flex items-center"> 
        <input type="text" placeholder="Search" class="bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
       <FaSearch className="text-slate-600 text-gray-600 w-5 h-5 ml-2 cursor-pointer"  />
    </form>
    
  </div>
</header>
  )
}

export default Header