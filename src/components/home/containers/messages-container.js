import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import MessageFactory from './message-factory';

const scrollToBottom = () => {
  const chat = document.getElementById('messages-container');
  chat.scrollTop = chat.scrollHeight;
};

const MessagesContainer = () => {
  const data = useSelector((state) => state.chatBot);
  const { messages } = data;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Row className="messages-container align-items-start" id="messages-container">
      {messages.map((message) => (
        <MessageFactory message={message} data={data} class="message-card" key={message.id} />
      ))}
    </Row>
  );
};

export default MessagesContainer;
