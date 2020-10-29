import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Navbar.Brand href='/'>Clone Netflix</Navbar.Brand>
      </Navbar>
    </div>
  )
}
