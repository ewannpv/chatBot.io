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
        <Col xs={3} className="left">
          <PersonsContainer />
        </Col>
        <Col xs={9} className="d-flex flex-column mt-3 pr-0 col align-self-end">
          <MessagesContainer />
          <MessageInputContainer />
        </Col>
      </Row>
    </Container>
    <FooterContainer />
  </div>
);

export default Home;
