import React from 'react';
import { connect } from 'react-redux';
import { Col, Form, Button } from 'react-bootstrap';

const MessageInputContainer = ({ data }) => (
  <Col className="p-1 mt-3 w-100 message-input-container">
    <Form>
      <Form.Row>
        <Form.Control placeholder={data.user.name} className="shadow bg-white" />
      </Form.Row>
      <Form.Row className="justify-content-end mt-3">
        <Button variant="btn btn-outline-dark btn-lg" type="submit" className="shadow">
          Send
        </Button>
      </Form.Row>
    </Form>
  </Col>
);

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(MessageInputContainer);
