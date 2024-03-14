import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import DetailedMovieView from './components/DetailedMovieView';
import MovieTile from './components/MovieTile';


const App = () => {
  return (
    <div style={{ width: '100%' }}>
      {/* <HashRouter>
        <Routes> */}
        <BrowserRouter>
        
        <Routes>
          <Route exact path='/' element={<MovieList/>}/>
          <Route exact path='/detailed-movie-view/:id' element={<DetailedMovieView/>}/>
          <Route exact path='/movie-tile' element={<MovieTile/>}/>
          </Routes>
          </BrowserRouter>
        {/* </Routes>
      </HashRouter> */}
    </div>
  );
};

export default App;
