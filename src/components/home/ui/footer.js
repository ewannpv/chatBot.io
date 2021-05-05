import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const HomeFooter = () => (
  <Navbar fixed="bottom" bg="dark" variant="dark">
    <Container fluid="xl h-100">
      <Nav>
        <Nav.Link href="https://github.com/ewannpv">
          Github
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default HomeFooter;
