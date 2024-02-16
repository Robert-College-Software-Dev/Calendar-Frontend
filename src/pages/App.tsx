import React from 'react';
import logo from './logo.svg';
import Layout from './Layout';
import { useMediaQuery } from "react-responsive";
import { useDarkMode } from 'usehooks-ts';


function App() {

  const root = window.document.documentElement;
  root.classList.add("dark");

  // save theme to local storage
  localStorage.setItem('theme', "dark");



  return (
    <div className='App'>
      <Layout />
      <p className='absolute left-1/2 p-4 bottom-0 -translate-x-1/2 antialiased text-lg text-emerald-400'>
        Process: {process.env.REACT_APP_MODE}
      </p>
    </div>
  );
}

export default App;
