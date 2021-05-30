import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Message from '../objects/message';
import { startsWith, splitMessage } from './utils';
import { SendResponse } from '../actions';
import store from '../../../store';

const getHelp = () => {
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

const getCatError = () => (
  new Message(
    <p>
      Hm.. do you need help ? write:&nbsp;
      <b>@roger help</b>
    </p>, 'BOT_1'
  )
);

const scrollToBottom = () => {
  const chat = document.getElementById('messages-container');
  chat.scrollTop = chat.scrollHeight;
};

const getCat = (args) => {
  const uniqueNum = Math.random();

  const url = `https://cataas.com/${args}?uniqueNum=${uniqueNum}`;
  axios.get(url).then(() => {
    store.dispatch(SendResponse(new Message(<img src={url} alt="" onLoad={scrollToBottom} className="w-100" />, 'BOT_1'), 'BOT_1'));
  }).catch(() => {
    store.dispatch(SendResponse(getCatError(), 'BOT_1'));
  });
};

const handleBot1 = (message, bot) => {
  bot.updateLastMessage();
  const parsedMessage = message.split(' ');
  if (parsedMessage.length === 0 || parsedMessage[1] !== 'cat') {
    store.dispatch(SendResponse(getHelp(), 'BOT_1'));
    return;
  }
  let args = 'cat';
  parsedMessage.forEach((element) => {
    if (element === 'gif') args = args.concat('/gif');
    else if (startsWith(element, 'tag:')) args = args.concat('/'.concat(splitMessage(element, 'tag:')));
    else if (startsWith(element, 'says:')) args = args.concat('/says/'.concat(splitMessage(element, 'says:')));
  });
  getCat(args);
};

export default handleBot1;
