import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import MessageFactory from './message-factory';

const scrollToBottom = () => {
  const chat = document.getElementById('messages-container');
  chat.scrollTop = chat.scrollHeight;
};

const MessagesContainer = class MessagesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidUpdate() {
    scrollToBottom();
  }

  render() {
    const { data } = this.props;
    const { messages } = data;
    return (
      <Row className="messages-container align-items-start" id="messages-container">
        {messages.map((message) => (
          <MessageFactory message={message} data={data} class="message-card" key={message.id} />
        ))}
      </Row>
    );
  }
};

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(MessagesContainer);
