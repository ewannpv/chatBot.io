import React from 'react';
import { connect } from 'react-redux';
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
    <Col lg="1" className="pr-1">
      <Image src={person.imageURL} roundedCircle className="avatar-img" />
    </Col>
    <Col lg="8" className="pl-0">
      <Card className="message-card pl-4 pr-4 pb-3 mb-3">
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
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias animi minima
          qui tenetur dolorum repudiandae? Quod veniam id alias recusandae impedit,
          harum laborum, expedita quibusdam suscipit, dolore repellat error laboriosam.
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

const RightMessage = ({ message, person }) => (
  <Row className="d-flex justify-content-end">
    <Col lg="8" className="pl-0">
      <Card className="message-card pl-4 pr-4 pb-3 mb-3 text-white message-card-right">
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
        <Card.Body className="p-0">
          {message.content}
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias animi minima
          qui tenetur dolorum repudiandae? Quod veniam id alias recusandae impedit,
          harum laborum, expedita quibusdam suscipit, dolore repellat error laboriosam.
        </Card.Body>
      </Card>
    </Col>
    <Col lg="1" className="pl-1">
      <Image src={person.imageURL} roundedCircle className="avatar-img" />
    </Col>
  </Row>
);

const MessageFactory = ({ message, data }) => {
  const person = getPerson(message.key, data);
  if (person.isBot) return <LeftMessage message={message} person={person} />;
  return <RightMessage message={message} person={person} />;
};

const MessagesContainer = ({ data }) => {
  const { messages } = data;

  return (
    <div className="h-75">
      <Row className="w-100 ml-1 mt-4 messages-container">
        {messages.map((message) => (
          <MessageFactory message={message} data={data} />
        ))}
        {messages.map((message) => (
          <MessageFactory message={message} data={data} />
        ))}
        {messages.map((message) => (
          <MessageFactory message={message} data={data} />
        ))}
        {messages.map((message) => (
          <MessageFactory message={message} data={data} />
        ))}
        {messages.map((message) => (
          <MessageFactory message={message} data={data} />
        ))}
        {messages.map((message) => (
          <MessageFactory message={message} data={data} />
        ))}
      </Row>
    </div>

  );
};

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(MessagesContainer);
