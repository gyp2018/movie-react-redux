import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({title}) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
};

export default Movie;
