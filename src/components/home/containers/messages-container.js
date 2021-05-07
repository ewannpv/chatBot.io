import React, { Component } from 'react';
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
    <Col lg="1" className="pr-1 ml-2 d-none d-lg-block">
      <Image src={person.imageURL} roundedCircle className="avatar-img" />
    </Col>
    <Col lg="8" className="pl-0 col-md-auto">
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
  <Row className="d-flex justify-content-end">
    <Col lg="8" className="pr-0">
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
    <Col lg="1" className="pl-1 mr-2 d-none d-lg-block">
      <Image src={person.imageURL} roundedCircle className="avatar-img" />
    </Col>
  </Row>
);

const MessageFactory = ({ message, data }) => {
  const person = getPerson(message.key, data);
  if (person.isBot) return <LeftMessage message={message} person={person} />;
  return <RightMessage message={message} person={person} />;
};

const MessagesContainer = class MessagesContainer extends Component {
  constructor() {
    super();
    this.state = {};
    this.chatContainer = React.createRef();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const scroll = this.chatContainer.current.scrollHeight
      - this.chatContainer.current.clientHeight;
    this.chatContainer.current.scrollTo(0, scroll);
  }

  render() {
    const { data } = this.props;
    const { messages } = data;
    return (
      <Row className="w-100 messages-container align-items-start" ref={this.chatContainer}>
        {messages.map((message) => (
          <MessageFactory message={message} data={data} class="message-card" key={message.id} />
        ))}
      </Row>
    );
  }
};

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(MessagesContainer);
