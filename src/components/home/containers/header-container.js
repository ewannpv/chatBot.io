import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Container } from 'react-bootstrap';

const HeaderContainer = () => {
  const username = useSelector((state) => state.chatBot.user.name);
  return (
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
              {username}
            </span>
            {' !'}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderContainer;
