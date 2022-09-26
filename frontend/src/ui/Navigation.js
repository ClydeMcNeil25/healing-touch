import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import DHTCircle from './images/htcircle.png'

export function Navigation () {
  return (
    <>
      <Navbar expand="md">
        <Container className="w-75 p-1">
            <Navbar.Brand href="/">
                <img 
                src={DHTCircle} 
                className="p-0 p-m"
                width="80px"
                alt="DHT Logo Circle"
                />
            </Navbar.Brand>
          <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-4">
              <Nav.Link href="/squads" className="text">About</Nav.Link>
              <Nav.Link href="/profile" className="text">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}