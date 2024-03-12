import React, { useEffect, useState } from "react";
// import * as React from 'react';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile'; 
import ImageList from '@mui/material/ImageList';
// import './MovieList.css';


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
    <div /*className="gridListDiv"*/>
        <h1 /*className="header"*/>Take a look at our movies...</h1>
        <div /*className="gridListDiv1"*/>
          <ImageList sx={{ width: 500, height: 450 }} cols={2}  /*cols={6} cellheight={300} className="gridList"*/>
            <MovieTile movies={movies}/>
          </ImageList>
        </div>
    </div>

  )
}

export default MovieList;