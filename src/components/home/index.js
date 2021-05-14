import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderContainer from './containers/header-container';
import PersonsContainer from './containers/persons-container';
import MessageInputContainer from './containers/message-input-container';
import MessagesContainer from './containers/messages-container';
import FooterContainer from './containers/footer-container';

const Home = () => (
  <div className="h-100">
    <HeaderContainer />
    <Container fluid="xl" className="h-100">
      <Row className="h-100">
        <Col xl={3} className="h-100 users-container">
          <PersonsContainer />
        </Col>
        <Col xl={9} className="h-100">
          <MessagesContainer />
        </Col>
      </Row>
    </Container>
    <MessageInputContainer />
    <FooterContainer />
  </div>
);

export default Home;
