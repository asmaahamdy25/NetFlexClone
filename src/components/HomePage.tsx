import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { StateType } from 'typesafe-actions'
import { Link } from 'react-router-dom'
import { MoviesList } from './MoviesList'
import { moviesList } from '../Actions/moviesActions'

export const HomePage = () => {
  const dispatch = useDispatch()
  const movies = useSelector(
    (State: StateType<any>) => State.listOfmovies.movies
  )
  useEffect(() => {
    dispatch(moviesList())
  }, [dispatch])

  return (
    <>
      <Container>
        {movies.map((movie: any) => (
          <Row className='general-container'>
            <Link to={`/gener/${movie.id}`}>{movie.type}</Link>
            <Row md={5}>
              {movie.movies.map((m: any) => (
                <MoviesList movie={m} />
              ))}
            </Row>
          </Row>
        ))}
      </Container>
    </>
  )
}
