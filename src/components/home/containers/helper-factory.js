import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import Message from '../objects/message';

export const getHelpBot1 = () => {
  const content = (
    <Col>
      <Row>
        <h5>Here is what I can do:</h5>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat, will return a random cat. &nbsp;
            <FontAwesomeIcon icon={faCat} />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat gif, will return a random gif cat \o/. &nbsp;
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat tag:, will return a random cat with a :tag, e.g:&nbsp;
          </Row>
          <Row>
            <b>@roger cat tag:cute </b>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat says:, will return a random cat saying :text, e.g:&nbsp;
          </Row>
          <Row>
            <b>@roger cat says:hello </b>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat tag: says:, will return a random cat with a :tag and saying :text, e.g:&nbsp;
          </Row>
          <Row>
            <b>@roger cat tag:cute says:hello </b>
          </Row>
        </Col>
      </Row>
    </Col>
  );
  return new Message(content, 'BOT_1');
};

export const getErrorBot1 = () => (
  new Message(
    <p>
      Hm.. do you need help ? write:&nbsp;
      <b>@roger help</b>
    </p>, 'BOT_1'
  )
);

export const getHelpBot2 = () => {
  const content = (
    <Col>
      <Row>
        <h5>Here is what I can do:</h5>
      </Row>
      <Row>
        <Col>
          <Row>
            - assets, will return the list of supported assets.
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - assets :id, will return the asset details associated with the given :id, e.g:&nbsp;
          </Row>
          <Row>
            <b>@maria assets bitcoin</b>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - assets :id history, will return
            price evolution during the last 24 hours associated with
            the given :id, e.g:&nbsp;
          </Row>
          <Row>
            <b>@maria assets bitcoin history</b>
          </Row>
        </Col>
      </Row>
    </Col>
  );
  return new Message(content, 'BOT_2');
};

export const getErrorBot2 = () => (
  new Message(
    <p>
      Hm.. do you need help ? write:&nbsp;
      <b>@maria help</b>
    </p>, 'BOT_2'
  )
);
