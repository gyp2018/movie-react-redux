import { combineReducers } from 'redux'
import movies from './movies'
import visibilityFilter from './visibilityFilter'

const movieApp = combineReducers({
  movies,
  visibilityFilter
})

export default movieApp
