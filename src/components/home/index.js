import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import HomeHeader from './ui/header';
import HomeFooter from './ui/footer';
import PersonsWidget from './ui/persons_widget';
import MessageInputWidget from './ui/message-input-widget';

const Home = () => (
  <div className="h-100">
    <HomeHeader />
    <Container fluid="xl h-100" className="main-content">
      <Row className="h-100">
        <Col xs lg="3" className="t m-3 p-0">
          <PersonsWidget />
        </Col>
        <Col>
          <MessageInputWidget />
        </Col>
      </Row>
    </Container>
    <HomeFooter />
  </div>
);

export default Home;
