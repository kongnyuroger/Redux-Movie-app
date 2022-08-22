import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/footer/Footer'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
