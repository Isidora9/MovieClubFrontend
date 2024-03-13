import ImageList from '@mui/material/ImageList';

import React, { useEffect, useState } from "react";
import MovieTile from './MovieTile'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  function getMovies() {
    fetch("http://localhost:8080/movies/allMovies", {
        
    })
        .then(response => response.json())
        .then(data => {
            setMovies(data);
        })
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div>
        <h1>Take a look at our movies...</h1>
        <div>
          <ImageList sx={{ width: '100%', height: '100%' }}>
            <MovieTile movies={movies}/>
          </ImageList>
        </div>
    </div>
  )
}

export default MovieList;