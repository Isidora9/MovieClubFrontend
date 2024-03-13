import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <h1>Movies</h1>
      <MovieList />
    </div>
  );
};

export default App;
