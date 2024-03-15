import React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import { PropTypes } from 'prop-types';

const MovieTile = ({ movies, movieDetails }) => {
  console.log(movies);
  return (
  <>
    {movies.map((movie) => (
      <ImageListItem key={movie.name}>
        <img
              // srcSet="https://hendrickhudsonanchor.org/wp-content/uploads/2021/01/Dune2-577x900.jpg?w=248&fit=crop&auto=format&dpr=2 2x"
              src="https://hendrickhudsonanchor.org/wp-content/uploads/2021/01/Dune2-577x900.jpg"
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