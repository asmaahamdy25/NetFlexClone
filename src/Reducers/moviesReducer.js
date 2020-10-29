import { action } from 'typesafe-actions'

export const MoviesListReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case 'MOVIES_LIST_REQUEST':
      return { movies: action.data }
    default:
      return state
  }
}

export const GenerReducer = (state = { movies: {} }, action) => {
  switch (action.type) {
    case 'GENER_REQUEST':
      return { movies: action.data }
    default:
      return state
  }
}

export const SelectedMovieReducer = (
  state = { movie: {}, relatedMovies: [] },
  action
) => {
  switch (action.type) {
    case 'SELECTED_MOVIE_REQUEST':
      return { movie: action.data, relatedMovies: action.relatedMovies }
    default:
      return state
  }
}

export const AddToWatchListReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case 'ADD_WATCHLIST_REQUEST':

    default:
      return state
  }
}

export const GetWatchList = (state = { watchList: [], action }) => {
  switch (action.type) {
    case 'Get_WATCHLIST_REQUEST':
      return { watchList: action.watchList }
    default:
      return state
  }
}
