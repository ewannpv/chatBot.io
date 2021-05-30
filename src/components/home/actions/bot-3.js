import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Message from '../objects/message';
import { SendResponse } from '../actions';
import store from '../../../store';
import {
  RandomBeer, BeersList, BeerById, BeersByAbv
} from '../containers/beers-container';
import { startsWith, splitMessage } from './utils';

const url = 'https://api.punkapi.com/v2/beers';

const getHelp = () => {
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

const getMessageError = () => (
  new Message(
    <p>
      Hm.. do you need help ? write:&nbsp;
      <b>@pedro help</b>
    </p>, 'BOT_3'
  )
);

const getRandomBeer = () => {
  axios.get(`${url}/random`).then((response) => {
    const { data } = response;
    store.dispatch(SendResponse(new Message(<RandomBeer data={data} />, 'BOT_3')));
  }).catch(() => {
    store.dispatch(SendResponse(getMessageError(), 'BOT_3'));
  });
};

const getBeerById = (id) => {
  axios.get(`${url}?ids=${id}`).then((response) => {
    const { data } = response;
    store.dispatch(SendResponse(new Message(<BeerById data={data} />, 'BOT_3')));
  }).catch(() => {
    store.dispatch(SendResponse(getMessageError(), 'BOT_3'));
  });
};

const getBeerByAbv = (id) => {
  axios.get(`${url}?abv_gt=${id}`).then((response) => {
    const { data } = response;
    store.dispatch(SendResponse(new Message(<BeersByAbv data={data} abv={id} />, 'BOT_3')));
  }).catch(() => {
    store.dispatch(SendResponse(getMessageError(), 'BOT_3'));
  });
};
const getBeers = () => {
  axios.get(`${url}?per_page=50`).then((response) => {
    const { data } = response;
    store.dispatch(SendResponse(new Message(<BeersList data={data} />, 'BOT_3')));
  }).catch(() => {
    store.dispatch(SendResponse(getMessageError(), 'BOT_3'));
  });
};

const handleBot3 = (message, bot) => {
  bot.updateLastMessage();
  const parsedMessage = message.split(' ');
  if (parsedMessage.length === 0 || parsedMessage[1] !== 'beers') {
    store.dispatch(SendResponse(getHelp(), 'BOT_3'));
    return;
  }

  switch (parsedMessage.length) {
    case 2:
      getBeers();
      break;
    case 3:
      if (parsedMessage[2] === 'random') getRandomBeer();
      else if (startsWith(parsedMessage[2], 'id:')) getBeerById(splitMessage(parsedMessage[2], 'id:'));
      else if (startsWith(parsedMessage[2], 'abv:')) getBeerByAbv(splitMessage(parsedMessage[2], 'abv:'));
      else store.dispatch(SendResponse(getMessageError(), 'BOT_3'));
      break;
    default:
      store.dispatch(SendResponse(getMessageError(), 'BOT_3'));
      break;
  }
};

export default handleBot3;
