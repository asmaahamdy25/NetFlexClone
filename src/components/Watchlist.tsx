import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesList } from './MoviesList'
import { Container, Row, Col } from 'react-bootstrap'
import { getWatchList } from '../Actions/moviesActions'
import { StateType } from 'typesafe-actions'

export const Watchlist = () => {
  const [watchList, setWatchList] = useState(
    useSelector((State: StateType<any>) => State.watchList)
  )
  const watchListClone = [...watchList]
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    let sortData = []
    const data = watchListClone.slice()

    sortData = data.sort((a, b) => {
      const isAsc = sort === 'asc'
      return compare(a, b, isAsc)
    })
    setWatchList(sortData)
  }, [sort])

  useEffect(() => {
    let result: Array<any> = []
    const data = watchListClone.slice()
    data.forEach((el: any) => {
      if (el.title && el.title.includes(search)) {
        result.push(el)
      }
    })
    setWatchList(result)
  }, [search, watchList.length > 1])

  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
  }

  return (
    <Container id='genere'>
      <div className='genere-header'>
        <div className='title'>Your Watchlist</div>
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
        {' '}
        <Row md={5}>
          {watchList.length > 0 &&
            watchList.map((m: any) => <MoviesList movie={m} />)}
        </Row>
      </div>
    </Container>
  )
}
