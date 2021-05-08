import React, { Component } from 'react';
import {
  Col, Form, Button, Container, Row
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { SendMessage } from '../actions';
import parseMessage from '../actions/message-parser';

const MessageInputContainer = class MessageInputContainer extends Component {
  constructor() {
    super();
    this.state = { textInput: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ textInput: e.target.value });
  }

  handleClick(e) {
    const { dispatch } = this.props;
    const { data } = this.props;

    e.preventDefault();
    const { textInput } = this.state;
    if (!textInput) return;
    dispatch(SendMessage(textInput));
    this.setState({ textInput: '' });

    parseMessage(data, textInput);
  }

  render() {
    const { textInput } = this.state;
    return (
      <Col className="mt-3 pl-3 pr-3 message-input-container">
        <Container fluid="xl" className="h-100">
          <Row className="h-100">
            <Col xl={3} />
            <Col xl={9} className="p-0">
              <Form>
                <Form.Row className="d-flex">
                  <Col className="d-flex">
                    <Form.Control value={textInput} onChange={this.handleChange} type="text" placeholder="Search" className="bg-white fs-5" />
                  </Col>
                  <Col className="input-btn-row p-0">
                    <Button onKeyPress={(e) => e.preventDefault()} onClick={this.handleClick} variant="btn btn-outline-dark" type="submit">
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
  }
};

const mapTopProps = (store) => ({ data: store.chatBot });
export default connect(mapTopProps)(MessageInputContainer);
