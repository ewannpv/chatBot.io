import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Message from '../objects/message';
import { SendResponse } from '../actions';
import store from '../../../store';

const getHelp = () => {
  const content = (
    <Col>
      <Row>
        <h5>Hey it looks like you need some help</h5>
      </Row>
      <Row>
        To receive help from a particular bot, just ping him.
      </Row>
      <Row className="mt-2">
        <Col>
          <Row>
            - Roger can show you some cute cats.
          </Row>
          <Row>
            For more information, write:
            {' '}
            <b>@Roger</b>
          </Row>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Row>
            - Maria can help you to track some cryptocurrencies.
          </Row>
          <Row>
            For more information, write:
            {' '}
            <b>@Maria</b>
          </Row>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Row>
            - If you&apos;r looking for some information about beers, Pedro is your man.
          </Row>
          <Row>
            For more information, write:
            {' '}
            <b>@Pedro</b>
          </Row>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Row>
            Moreover,
            as we are polite, if you say

            <b>
              &nbsp;
              hello
              &nbsp;
            </b>
            or
            <b>
              &nbsp;
              goodbye
              &nbsp;
            </b>
            , we&apos;ll answer you all together
          </Row>
          <Row className="mt-2">
            <b>ping</b>
            &nbsp;
            ...
          </Row>
        </Col>
      </Row>
    </Col>
  );
  return new Message(content, 'BOT_4');
};

const handleBot4 = (bot) => {
  store.dispatch(SendResponse(getHelp(), bot.key));
};

export default handleBot4;
