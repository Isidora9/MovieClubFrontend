import React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieTile.css';
import '@fortawesome/fontawesome-free/css/all.css';


const MovieTile = ({ movies, movieDetails }) => {
  return (
  <>
    {movies.map((movie) => (
      <ImageListItem className='m-2 imageListItem' key={movie.id} onClick={() => movieDetails(movie.id)}>
        <i className="fas fa-plus-square"></i>
        <img
          src={movie.imageUrl}
          alt={movie.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={movie.name}
          subtitle={movie.genre}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${movie.name}`}
              onClick={() => movieDetails(movie.id)}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
       ))}
      </>
  )
};

MovieTile.propTypes = {
  movies: PropTypes.array,
  movieDetails: PropTypes.func
};

export default MovieTile;