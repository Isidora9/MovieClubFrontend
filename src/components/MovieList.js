import ImageList from '@mui/material/ImageList';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MovieTile from './MovieTile';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  function getMovies() {
    fetch("http://localhost:8080/movies/allMovies", {
    })
        .then(response => response.json())
        .then(data => {
            setMovies(data);
        })
  }

  useEffect(() => {
    return () => getMovies();
  }, [])

  const movieDetails = (id) => { 
    navigate('/detailed-movie-view/' + id);
}

  return (
    <div>
        <h1>Take a look at our movies...</h1>
          <div>
            <ImageList sx={{ width: '100%', height: '100%' }}>
              <MovieTile movies={movies} movieDetails={movieDetails}/>
            </ImageList>
          </div>
    </div>
  )
}

export default MovieList;