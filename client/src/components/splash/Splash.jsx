import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

const Splash = ({ userLoggedIn, loginRedir }) => (
  <div>
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="main-nav">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="justify-content-between" style={{ width: '100%' }}>
          <Nav.Link onClick={() => loginRedir()}>Sign Up/Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Image src="https://i.imgur.com/ZmhcsP0.png" alt="LOGO" fluid />
  </div>
);

export default Splash;
