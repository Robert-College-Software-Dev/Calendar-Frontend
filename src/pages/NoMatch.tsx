import React from 'react';

export default function NoMatch() {
  return (
    <div className='flex justify-center h-[100vh] place-items-center'>
      <p
        className='font-light p-4 transition-all duration-300 text-6xl 
      bg-gradient-to-r from-red-600 to-pink-300 bg-clip-text text-transparent'>
        UPS! You've headed a 404 Page!
      </p>
    </div>
  );
}
