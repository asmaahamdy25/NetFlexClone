import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesList } from './MoviesList'
import { Container, Row } from 'react-bootstrap'
import { selectedMovie, addWatchlist } from '../Actions/moviesActions'
import { StateType } from 'typesafe-actions'

export const MoviePage = ({ match, history }: { match: any; history: any }) => {
  const dispatch = useDispatch()
  const { movie, relatedMovies } = useSelector(
    (State: StateType<any>) => State.selectedMovie
  )
  useEffect(() => {
    dispatch(selectedMovie(match.params.id))
  }, [dispatch])

  function addToWatchList() {
    dispatch(addWatchlist(movie))
    history.push('/watchlist')
  }
  return (
    <Container id='movie-page'>
      <div className='movie-screen'>
        <div className='arrow'>&#8592; </div>
        <img
          src={movie.image}
          className='img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}'
          alt=''
        />
        <div className='title'> {movie.title}</div>
        <button onClick={addToWatchList}> add to watchlist</button>
      </div>
      <div className='description'>{movie.description}</div>
      <div className='related-container'>
        <h5>Related movies</h5>
        <Row md={5}>
          {relatedMovies.length > 0 &&
            relatedMovies.map(
              (m: any) => m.id !== +match.params.id && <MoviesList movie={m} />
            )}
        </Row>
      </div>
    </Container>
  )
}
