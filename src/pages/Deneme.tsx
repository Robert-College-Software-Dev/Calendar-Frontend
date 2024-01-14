import React, { useEffect, useState } from 'react';
import { getDeneme } from '../services/deneme';
import CopyToClipboardComponent from '../components/CopyToClipboard';

export default function Deneme() {
  //hooks

  // let, const 

  const [denemeText, setDenemeText] = useState('');

  useEffect(() => {
    const fetchDeneme = async () => {
      setDenemeText(await getDeneme());
    };
    fetchDeneme();
  }, []);

  return (
    <div className='flex flex-col justify-center h-[100vh] place-items-center'>
      <p
        className='font-light p-4 transition-all antialiased duration-300 text-6xl 
      bg-gradient-to-r from-blue-800 to-violet-500 bg-clip-text text-transparent'>
        Thanks For Coming!{' '}
      </p>
      <p
        className='font-light p-4 transition-all antialiased duration-300 text-4xl 
      bg-gradient-to-r from-stone-700 to-gray-300 bg-clip-text text-transparent'>
        API DATA : {denemeText} <CopyToClipboardComponent text={denemeText} />
      </p>
    </div>
  );
}
