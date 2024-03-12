import React from 'react';
import PropTypes from 'prop-types';
// import './MovieTile.css';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import GridListTile from '@material-ui/core/GridListTile';
import ImageListItem from '@mui/material/ImageListItem';


const MovieTile = ({ movies }) => {
  return (
  <div /*className='gridListTitle1'*/> 
    {movies.map((movie, index) => (
      <div key={index}>
        <ImageListItem key="Subheader" cols={2} /*className='gridListTitle'*/>
          <img /*className="book-image"*/ src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" alt="movie url" loading="lazy" />
          <ImageListItemBar>
            title={movie.name}
            subtitle={<span>by: {movie.genre}</span>}
            position="below"
            {/* {movie.name} */}
            {/* actionIcon={
                <IconButton aria-label={`info about ${movie.name}`} className='icon'>
                    <InfoIcon />
                </IconButton>
              } */}
          </ImageListItemBar>
        </ImageListItem>
      </div>
       ))}
      </div>
  )

};

export default MovieTile;
