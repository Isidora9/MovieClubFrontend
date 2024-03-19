import ImageList from '@mui/material/ImageList';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MovieTile from './MovieTile';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [totalCount, setTotalCount] = useState(0);
  const handleChange = (event, value) => {
    setPage(value);
};

  function getMovies() {
    fetch(`http://localhost:8080/movies/allMovies?page=${page}&size=${pageSize}`, {
      method: 'GET',
      credentials: 'same-origin',
    })

    .then(response => response.json())
    .then(data => {
      setMovies(data.movies);
      setTotalCount(data.totalCount);
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
    })
  }

  useEffect(() => {
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
      <Stack spacing={2}>
        <Pagination count={Math.ceil(totalCount / pageSize)} page={page} onChange={handleChange} />
      </Stack>
    </div>
  )
}

export default MovieList;