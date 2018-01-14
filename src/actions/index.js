import * as types from './types';

export const setVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

export const fetchMovies = () => {
  return {
    type: types.FETCH_MOVIES
  }
}

export const receiveMovies = movies => {
  return {
    type: types.RECEIVE_MOVIES,
    movies
  }
}
