import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import HeaderContainer from './containers/header-container';
import PersonsContainer from './containers/persons-container';
import MessageInputContainer from './containers/message-input-container';
import MessagesContainer from './containers/messages-container';
import FooterContainer from './containers/footer-container';

const Home = () => (
  <div className="h-100">
    <HeaderContainer />
    <Container fluid="xl" className="d-flex h-100">
      <Row className=" d-flex w-100 flex-fill align-items-stretch content ">
        <Col lg="3" className="d-flex flex-column mt-3 mb-3">
          <PersonsContainer />
        </Col>
        <Col className="d-flex flex-column mt-3 pr-0 col align-self-end">
          <MessagesContainer />
          <MessageInputContainer />
        </Col>
      </Row>
    </Container>
    <FooterContainer />
  </div>
);

export default Home;
