import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import DHTCircle from './images/htcircle.png'
import { Link } from 'react-router-dom'

export function Navigation () {
  return (
    <>
      <Navbar expand="md sticky-top">
        <Container className="w-75 rounded-5">
            <Navbar.Brand href="/">
                <img 
                src={DHTCircle} 
                className="p-0 p-m"
                width="85px"
                alt="DHT Logo Circle"
                />
            </Navbar.Brand>
          <Navbar.Toggle className="button" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex flex-row-reverse">
            <Nav className="me-auto fs-4 text-center">
              <Link to = {"/about"} className="text-white button rounded-pill fs-5 p-2 m-4  text-decoration-none">About</Link>
              <Link to = {"/contact"} className="text-white button rounded-pill fs-5 p-2 m-4 text-decoration-none">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}