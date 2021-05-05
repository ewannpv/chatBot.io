import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';

const HomeHeader = ({ data }) => (
  <Navbar bg="dark" variant="dark">
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
        Signed in as:
        {' '}
        {data.user.name}
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(HomeHeader);
