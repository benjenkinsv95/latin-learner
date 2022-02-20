import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, Route, Routes } from 'react-router-dom'
import MemriseButton from './MemriseButton'
import RepeatSectionsButton from './RepeatSectionsButton'

const authenticatedOptions = (
  <>
    {/* <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink> */}
  </>
)

const unauthenticatedOptions = (
  <>
    {/* <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink> */}
  </>
)

const alwaysOptions = song => (
  <>
    <Routes>
      <Route path='/songs/:id' element={(
        <>
          <RepeatSectionsButton song={song} />
          <MemriseButton song={song} />
        </>
      )} />
    </Routes>
  </>
)

const Header = ({ user, song }) => (
  <Navbar bg='dark' variant='dark' expand='md' style={{ borderBottom: '1px solid #343a40' }}>
    <Container fluid>
      <Navbar.Brand className='ps-1'>
        <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>Latin Learner</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {user && (
            <span className='navbar-text me-2'>Welcome, {user.email}</span>
          )}
          {alwaysOptions(song)}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
