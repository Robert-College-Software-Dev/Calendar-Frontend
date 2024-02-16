import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';
import Deneme from './Deneme';
import NavBar from '../components/NavBar';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NoMatch />} />
          <Route path='/deneme' element={<Deneme />} />
        </Routes>
      </Router>
    </div>

  );
}
