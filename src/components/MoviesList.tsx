import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const MoviesList = ({ movie }: { movie: any }) => {
  return (
    <>
      <div className='card'>
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.image}></img>
          <div className='movie-detail'>
            <div>{`{ ${movie.title} }`}</div>
            <div className='desc'>{`{ ${movie.description} }`}</div>
          </div>
        </Link>
      </div>
    </>
  )
}
