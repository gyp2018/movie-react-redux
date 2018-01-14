const movies = (state = [], action) => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       completed: false
    //     }
    //   ]
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    case 'FETCH_MOVIES':
      return []
    case 'RECEIVE_MOVIES':
      return [action.movies]
    default:
      return state
  }
}

export default movies
