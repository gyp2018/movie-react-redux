import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => (
  <div className="container">
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-6">
          <MovieItem
            title={movie.title}
            poster={movie.medium_cover_image}
            genres={movie.genrese}
            synopsis={movie.synopsis}
          />
        </div>
      ))}
    </div>
  </div>
);

MovieItem.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      medium_cover_image: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
      synopsis: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default MovieList;
