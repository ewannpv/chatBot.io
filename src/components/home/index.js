import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import HomeHeader from './ui/header';

const Home = ({ data }) => {
  const { user } = data;
  return (
    <div>
      <HomeHeader />
      <Container>
        <h1>Hello</h1>
        <b>{user.name}</b>
      </Container>
    </div>
  );
};

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(Home);
