import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav,Container} from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='p-1' to='/india'>India</Link>
            <Link className='p-1' to='/world'>World</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
