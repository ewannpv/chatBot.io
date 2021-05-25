import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Message from '../objects/message';
import { SendResponse } from '../actions';
import store from '../../../store';
import { CryptoAssetsContainer, CryptoAssetContainer, CryptoAssetHistoryContainer } from '../containers/crypto-assets-container';

const url = 'https://api.coincap.io/v2/assets';

const getHelp = () => {
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

const getMessageError = () => (
  new Message(
    <p>
      Hm.. do you need help ? write:&nbsp;
      <b>@maria help</b>
    </p>, 'BOT_2'
  )
);

const getAssets = () => {
  axios.get(url).then((response) => {
    const { data } = response.data;
    store.dispatch(SendResponse(new Message(<CryptoAssetsContainer data={data} />, 'BOT_2')));
  }).catch(() => {
    store.dispatch(SendResponse(getMessageError(), 'BOT_2'));
  });
};

const getAssetsById = (id) => {
  axios.get(`${url}/${id}`).then((response) => {
    const { data } = response.data;
    store.dispatch(SendResponse(new Message(<CryptoAssetContainer data={data} />, 'BOT_2')));
  }).catch(() => {
    store.dispatch(SendResponse(getMessageError(), 'BOT_2'));
  });
};

const getAssetsHistory = (id) => {
  axios.get(`${url}/${id}/history?interval=d1`).then((response) => {
    const { data } = response.data;
    data.id = id;
    store.dispatch(SendResponse(new Message(<CryptoAssetHistoryContainer data={data} />, 'BOT_2')));
  }).catch(() => {
    store.dispatch(SendResponse(getMessageError(), 'BOT_2'));
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
    case 4:
      if (parsedMessage[3] === 'history') getAssetsHistory(parsedMessage[2]);
      else SendResponse(getMessageError(), 'BOT_2');
      break;
    default:
      SendResponse(getMessageError(), 'BOT_2');
      break;
  }
};

export default handleBot2;
