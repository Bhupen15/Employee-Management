import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
        <Nav.Link as={Link} to="/login">Home</Nav.Link>
          <Nav.Link as={Link} to="/employee">employee List</Nav.Link>
          <Nav.Link href="#">manager List</Nav.Link>
          <Nav.Link as={Link} to="/login">sign In</Nav.Link>
          <Nav.Link href="#"></Nav.Link>
          {/* Add more Nav.Link components for other menu items */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
