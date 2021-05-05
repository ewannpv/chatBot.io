import React from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Form, Button
} from 'react-bootstrap';

const MessageInputWidget = ({ data }) => (
  <Row className="align-items-end h-100 p-3">
    <Col>
      <Form>
        <Form.Row>
          <Form.Control placeholder={data.user.name} className="shadow bg-white" />
        </Form.Row>
        <Form.Row className="justify-content-end mt-3">
          <Button variant="btn btn-dark btn-lg" type="submit" className="shadow">
            Submit
          </Button>
        </Form.Row>
      </Form>
    </Col>

  </Row>
);

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(MessageInputWidget);
