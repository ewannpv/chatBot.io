import React from 'react';
import {
  Row,
  Image,
  Col,
  Card
} from 'react-bootstrap';
import TimeAgo from 'timeago-react';

const getPerson = (key, data) => {
  const { user } = data;
  const { bots } = data;

  if (key === user.key) return user;
  return bots.filter((bot) => key === bot.key)[0];
};

const LeftMessage = ({ message, person }) => (
  <Row>
    <Col lg="1" className="pr-0 ml-2 d-none d-lg-block">
      <Image src={person.imageURL} roundedCircle className="avatar-img" />
    </Col>
    <Col xs="7">
      <Card className="message-card pl-4 pr-4 pb-3 mb-3 shadow">
        <Row className="d-flex justify-content-between mt-2 mb-0">
          <Col>
            <h4>
              {person.name}
            </h4>
          </Col>
          <Col className="text-right fw-light">
            <TimeAgo
              datetime={message.date}
              locale="en_US"
            />
          </Col>
        </Row>
        <Card.Body className="p-0">
          {message.content}
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

const RightMessage = ({ message, person }) => (
  <Row className="d-flex justify-content-md-end">
    <Col xs="7">
      <Card className="message-card pl-4 pr-4 pb-3 mb-3 text-white message-card-right shadow">
        <Row className="d-flex justify-content-between mt-2 mb-0">
          <Col>
            <TimeAgo
              datetime={message.date}
              locale="en_US"
            />
          </Col>
          <Col className="text-right fw-light">
            <h4>
              {person.name}
            </h4>
          </Col>
        </Row>
        <Card.Body className="p-0 text-right">
          {message.content}
        </Card.Body>
      </Card>
    </Col>
    <Col lg="1" className="pl-0 mr-2 d-none d-lg-block">
      <Image src={person.imageURL} roundedCircle className="avatar-img" />
    </Col>
  </Row>
);

const MessageFactory = ({ message, data }) => {
  const person = getPerson(message.key, data);
  if (person.isBot) return <LeftMessage message={message} person={person} />;
  return <RightMessage message={message} person={person} />;
};

export default MessageFactory;
