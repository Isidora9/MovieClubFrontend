import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import DetailedMovieView from './components/DetailedMovieView';
import MovieTile from './components/MovieTile';
import NewMovieForm from './components/NewMovieForm';


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
          <Route exact path='/new-movie-form' element={<NewMovieForm/>}/>
          </Routes>
          </BrowserRouter>
        {/* </Routes>
      </HashRouter> */}
    </div>
  );
};

export default App;
