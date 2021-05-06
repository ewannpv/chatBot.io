import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const FooterContainer = () => (
  <footer>
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container fluid="xl">
        <Nav>
          <Nav.Link href="https://github.com/ewannpv">
            Github
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </footer>
);

export default FooterContainer;
