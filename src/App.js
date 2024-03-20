import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import DetailedMovieView from './components/DetailedMovieView';
import MovieTile from './components/MovieTile';
import NewMovieForm from './components/NewMovieForm';
import UpdateMovieForm from './components/UpdateMovieForm';

const App = () => {
  return (
    <div>
      {/* <HashRouter>
        <Routes> */}
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MovieList/>}/>
          <Route exact path='/detailed-movie-view/:id' element={<DetailedMovieView/>}/>
          <Route exact path='/movie-tile' element={<MovieTile/>}/>
          <Route exact path='/new-movie-form' element={<NewMovieForm/>}/>
          <Route exact path='/update-movie-form/:id' element={<UpdateMovieForm/>}/>
          </Routes>
          </BrowserRouter>
        {/* </Routes>
      </HashRouter> */}
    </div>
  );
};

export default App;
