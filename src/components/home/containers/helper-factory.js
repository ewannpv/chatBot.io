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

export const getHelpBot3 = () => {
  const content = (
    <Col>
      <Row>
        <h5>Here is what I can do:</h5>
      </Row>
      <Row>
        <Col>
          <Row>
            - beers, will return the first 50 beers we have.
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - beers random, will return a random beer;
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - beers id:id, will return the beer matching the given id.
          </Row>
          <Row>
            <b>@pedro beers id:2</b>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - beers abv:abv, will return all beers with ABV greater than the supplied number.
          </Row>
          <Row>
            <b>@pedro beers abv:11</b>
          </Row>
        </Col>
      </Row>
    </Col>
  );
  return new Message(content, 'BOT_3');
};

export const getErrorBot3 = () => (
  new Message(
    <p>
      Hm.. do you need help ? write:&nbsp;
      <b>@pedro help</b>
    </p>, 'BOT_3'
  )
);

export const getHelpBot4 = () => {
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
