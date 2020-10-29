import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import {
  MoviesListReducer,
  GenerReducer,
  SelectedMovieReducer,
  AddToWatchListReducer,
  GetWatchList,
} from './Reducers/moviesReducer.js'

const reducer = combineReducers({
  listOfmovies: MoviesListReducer,
  selectedGener: GenerReducer,
  selectedMovie: SelectedMovieReducer,
  watchList: AddToWatchListReducer,
  getWatchlList: GetWatchList,
})

const watchlistFromLocalStorage = localStorage.getItem('watchList')
  ? JSON.parse(localStorage.getItem('watchList'))
  : []
const initalState = {
  watchList: watchlistFromLocalStorage,
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
