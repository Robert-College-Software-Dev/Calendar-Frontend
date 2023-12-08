import React from 'react';
import logo from './logo.svg';
import Layout from './Layout';

function App() {
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
