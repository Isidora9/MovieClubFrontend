import ImageList from '@mui/material/ImageList';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MovieTile from './MovieTile';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(2);

  function getMovies() {
    fetch(`http://localhost:8080/movies/allMovies?page=${page}&size=${pageSize}`, {
      method: 'GET',
      credentials: 'same-origin',
      // headers: this.getHeaders(),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Page: ", {page});
      console.log(data);
      setMovies(data);
    })
  }

  useEffect(() => {
    // return () => getMovies();
    getMovies();
  }, [page, pageSize])

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
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}

export default MovieList;