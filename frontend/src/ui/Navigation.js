import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import DHTCircle from './images/htcircle.png'

export function Navigation () {
  return (
    <>
      <Navbar expand="md sticky-top">
        <Container className="w-75 rounded-5">
            <Navbar.Brand href="/">
                <img 
                src={DHTCircle} 
                className="p-0 p-m"
                width="80px"
                alt="DHT Logo Circle"
                />
            </Navbar.Brand>
          <Navbar.Toggle className="navBackground" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-end">
            <Nav className="me-auto fs-4 text-center">
              <Nav.Link href="/about" className="text-white navBackground rounded-pill m-4">About</Nav.Link>
              <Nav.Link href="/contact" className="text-white navBackground rounded-pill m-4">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}