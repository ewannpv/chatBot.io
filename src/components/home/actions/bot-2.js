import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Message from '../objects/message';
import { SendResponse } from '../actions';
import store from '../../../store';
import { CryptoAssetsContainer, CryptoAssetContainer } from '../containers/crypto-assets-container';

const getHelp = () => {
  const content = (
    <Col>
      <Row>
        <h5>Here is what I can do:</h5>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat, Will return a random cat. &nbsp;
            <FontAwesomeIcon icon={faCat} />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat gif, Will return a random gif cat \o/. &nbsp;
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat tag:, Will return a random cat with a :tag, e.g:&nbsp;
          </Row>
          <Row>
            <b>@roger cat tag:cute </b>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat says:, Will return a random cat saying :text, e.g:&nbsp;
          </Row>
          <Row>
            <b>@roger cat says:hello </b>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            - cat tag: says:, Will return a random cat with a :tag and saying :text, e.g:&nbsp;
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

const getCatError = () => (
  new Message(
    <p>
      Hm.. do you need help ? write:&nbsp;
      <b>@roger help</b>
    </p>, 'BOT_1'
  )
);

const getAssets = () => {
  const url = 'https://api.coincap.io/v2/assets';

  axios.get(url).then((response) => {
    const { data } = response.data;
    store.dispatch(SendResponse(new Message(<CryptoAssetsContainer data={data} />, 'BOT_2')));
  }).catch(() => {
    store.dispatch(SendResponse(getCatError(), 'BOT_2'));
  });
};

const getAssetsById = (id) => {
  const url = `https://api.coincap.io/v2/assets/${id}`;

  axios.get(url).then((response) => {
    const { data } = response.data;
    store.dispatch(SendResponse(new Message(<CryptoAssetContainer data={data} />, 'BOT_2')));
  }).catch(() => {
    store.dispatch(SendResponse(getCatError(), 'BOT_2'));
  });
};

const handleBot2 = (message, bot) => {
  bot.updateLastMessage();
  const parsedMessage = message.split(' ');
  if (parsedMessage.length === 0 || parsedMessage[1] !== 'assets') {
    store.dispatch(SendResponse(getHelp(), 'BOT_2'));
    return;
  }

  switch (parsedMessage.length) {
    case 2:
      getAssets();
      break;
    case 3:
      getAssetsById(parsedMessage[2]);
      break;
    default:
      break;
  }
};

export default handleBot2;
