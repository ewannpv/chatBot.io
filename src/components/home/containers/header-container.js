import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Container } from 'react-bootstrap';

const HeaderContainer = ({ data }) => (
  <Navbar bg="dark" variant="dark" className="fixed-top">
    <Container fluid="xl">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="src/images/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        ChatBot.io
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Welcome back
          {' '}
          <span className="text-white font-weight-bold">
            {data.user.name}
          </span>
          {' !'}
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(HeaderContainer);
