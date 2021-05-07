import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import MessageFactory from './message-factory';

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
      <Row className="messages-container align-items-start" ref={this.chatContainer}>
        {messages.map((message) => (
          <MessageFactory message={message} data={data} class="message-card" key={message.id} />
        ))}
      </Row>
    );
  }
};

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(MessagesContainer);
