import { movies } from '../movies.js'
export const moviesList = () => (dispatch) => {
  dispatch({ type: 'MOVIES_LIST_REQUEST', data: movies })
}

export const selectedGener = (id) => (dispatch) => {
  const selectedGener = movies.find((m) => m.id === +id)

  dispatch({ type: 'GENER_REQUEST', data: selectedGener })
}

export const selectedMovie = (id) => (dispatch) => {
  let relatedMovies
  let selectedMovie
  movies.forEach((m) => {
    const indx = m.movies.findIndex((mov) => mov.id === +id)
    if (indx !== -1) {
      selectedMovie = m.movies[indx]
      relatedMovies = m.movies
    }
  })

  dispatch({
    type: 'SELECTED_MOVIE_REQUEST',
    data: selectedMovie,
    relatedMovies: relatedMovies,
  })
}

export const addWatchlist = (movie) => (dispatch, getState) => {
  let watchList = getState().watchList
  const addedMovie = movie
  const isExist = watchList.find((m) => m.id === addedMovie.id)

  if (isExist) {
    watchList = watchList.map((m) => (m.id === isExist.id ? addedMovie : m))
  } else {
    watchList = [...watchList, addedMovie]
  }

  dispatch({
    type: 'ADD_WATCHLIST_REQUEST',
    movies: watchList,
  })

  localStorage.setItem('watchList', JSON.stringify(watchList))
}

export const getWatchList = () => (dispatch, getState) => {
  dispatch({
    type: 'Get_WATCHLIST_REQUEST',
    watchList: getState().watchList,
  })
}
