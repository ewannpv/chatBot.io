import React, { Component } from 'react';
import {
  Col, Form, Button, Container, Row
} from 'react-bootstrap';
import store from '../../../store';
import { SendMessage } from '../actions';

const MessageInputContainer = class MessageInputContainer extends Component {
  constructor() {
    super();
    this.state = { textInput: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  handleChange(e) {
    this.setState({ textInput: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    const { textInput } = this.state;
    if (!textInput) return;
    store.dispatch(SendMessage(textInput));
    this.setState({ textInput: '' });
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    const { textInput } = this.state;
    return (
      <Col className="mt-3 pl-0 ml-0 message-input-container">
        <Container fluid="xl" className="h-100">
          <Row className="h-100">
            <Col xl={3} />
            <Col xl={9}>
              <Form>
                <Form.Row>
                  <Form.Control value={textInput} onChange={this.handleChange} type="text" placeholder="Search" className="shadow bg-white fs-5" />
                </Form.Row>
                <Form.Row className="justify-content-end mt-3">
                  <Button onKeyPress={(e) => e.preventDefault()} onClick={this.handleClick} variant="btn btn-outline-dark btn-lg" type="submit" className="shadow">
                    Send
                  </Button>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
};

export default MessageInputContainer;
