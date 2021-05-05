import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

const Home = ({ data }) => {
  const { user } = data;
  return (
    <Container>
      <h1>Hello</h1>
      <b>{user.name}</b>
    </Container>
  );
};

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(Home);
