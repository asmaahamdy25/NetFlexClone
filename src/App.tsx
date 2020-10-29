import * as React from 'react'
import './styles.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sign } from './components/Sign'
import { Genere } from './components/Genere'
import { HomePage } from './components/HomePage'
import { MoviePage } from './components/MoviePage'
import { Watchlist } from './components/Watchlist'
export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className='py-3'>
          <Route path='/' exact component={Sign} />
          <Route path='/home' component={HomePage} />
          <Route path='/gener/:id' exact component={Genere} />
          <Route path='/movie/:id' exact component={MoviePage} />
          <Route path='/watchlist' exact component={Watchlist} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}
