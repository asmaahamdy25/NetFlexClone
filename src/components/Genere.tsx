import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesList } from './MoviesList'
import { Container, Row } from 'react-bootstrap'
import { selectedGener } from '../Actions/moviesActions'
import { StateType } from 'typesafe-actions'

export const Genere = ({ match }: { match: any }) => {
  const dispatch = useDispatch()
  let gener = useSelector((State: StateType<any>) => State.selectedGener.movies)
  useEffect(() => {
    dispatch(selectedGener(match.params.id))
  }, [dispatch])

  const generClone = [...gener]
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    let sortData = []
    const data = gener.slice()

    sortData = data.sort((a: any, b: any) => {
      const isAsc = sort === 'asc'
      return compare(a, b, isAsc)
    })
    gener = sortData
  }, [sort])

  useEffect(() => {
    let result: Array<any> = []
    const data = generClone.slice()
    data.forEach((el: any) => {
      if (el.title && el.title.includes(search)) {
        result.push(el)
      }
    })
    gener = result
  }, [search, gener.length > 0])

  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
  }

  return (
    <Container id='genere'>
      <div className='genere-header'>
        <div className='title'>{gener.type}</div>
        <div className='left-side-container'>
          <input
            type='text'
            placeholder='search'
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <select value={sort} onChange={(e) => setSort(e.currentTarget.value)}>
            <option value='asc'> year asc</option>
            <option value='desc'> year dasc</option>
          </select>
        </div>
      </div>
      <div className='movies-container'>
        <Row md={5}>
          {gener.movies &&
            gener.movies.map((m: any) => <MoviesList movie={m} />)}
        </Row>
      </div>
    </Container>
  )
}
