import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Col, Form, Button, Container, Row
} from 'react-bootstrap';
import { SendMessage } from '../actions';
import parseMessage from '../actions/message-parser';

const MessageInputContainer = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    textInput: ''
  });

  const data = useSelector((storeState) => storeState.chatBot);
  const handleChange = (e) => {
    setState({ textInput: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { textInput } = state;
    if (!textInput) return;
    dispatch(SendMessage(textInput));
    parseMessage(data, textInput);
    setState({ textInput: '' });
  };

  return (
    <Col className="mt-3 pl-3 pr-3 message-input-container">
      <Container fluid="xl" className="h-100">
        <Row className="h-100">
          <Col xl={3} />
          <Col xl={9} className="p-0">
            <Form>
              <Form.Row className="d-flex">
                <Col className="d-flex">
                  <Form.Control value={state.textInput} onChange={handleChange} type="text" placeholder="Write a message.." className="bg-white fs-5" />
                </Col>
                <Col className="input-btn-row p-0">
                  <Button onKeyPress={(e) => e.preventDefault()} onClick={handleClick} variant="btn btn-outline-dark" type="submit">
                    Send
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default MessageInputContainer;
