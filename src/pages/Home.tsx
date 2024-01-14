import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className='flex flex-col justify-center h-[100vh] place-items-center'>
      <p
        className='text-4xl font-light p-4 transition-all duration-300 hover:text-6xl 
      bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>
        What r we gonna do?
      </p>
      <Link
        to={'/deneme'}
        className='mt-10  hover:animate-pulse transition-all duration-500 text-2xl antialiased
         ring-2 p-4 rounded-xl opacity-80 text-cyan-800 shadow-xl shadow-teal-400 ring-green-600'>
        API'ı Denesene
      </Link>
      <div className='p-4 m-10 text-xl text-teal-600 font-semibold antialiased text-opacity-80'>
        {isAuth ? "Logged in" : "Logged out"}
      </div>
    </div>
  );
}
