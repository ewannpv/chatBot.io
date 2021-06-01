import React from 'react';
import axios from 'axios';
import Message from '../objects/message';
import { SendResponse } from '../actions';
import store from '../../../store';
import {
  RandomBeer, BeersList, BeerById, BeersByAbv
} from '../containers/beers-container';
import { startsWith, splitMessage } from './utils';
import { getHelpBot3, getErrorBot3 } from '../containers/helper-factory';

const url = 'https://api.punkapi.com/v2/beers';

const getRandomBeer = () => {
  axios.get(`${url}/random`).then((response) => {
    const { data } = response;
    store.dispatch(SendResponse(new Message(<RandomBeer data={data} />, 'BOT_3')));
  }).catch(() => {
    store.dispatch(SendResponse(getErrorBot3(), 'BOT_3'));
  });
};

const getBeerById = (id) => {
  axios.get(`${url}?ids=${id}`).then((response) => {
    const { data } = response;
    store.dispatch(SendResponse(new Message(<BeerById data={data} />, 'BOT_3')));
  }).catch(() => {
    store.dispatch(SendResponse(getErrorBot3(), 'BOT_3'));
  });
};

const getBeerByAbv = (id) => {
  axios.get(`${url}?abv_gt=${id}`).then((response) => {
    const { data } = response;
    store.dispatch(SendResponse(new Message(<BeersByAbv data={data} abv={id} />, 'BOT_3')));
  }).catch(() => {
    store.dispatch(SendResponse(getErrorBot3(), 'BOT_3'));
  });
};
const getBeers = () => {
  axios.get(`${url}?per_page=50`).then((response) => {
    const { data } = response;
    store.dispatch(SendResponse(new Message(<BeersList data={data} />, 'BOT_3')));
  }).catch(() => {
    store.dispatch(SendResponse(getErrorBot3(), 'BOT_3'));
  });
};

const handleBot3 = (message, bot) => {
  bot.updateLastMessage();
  const parsedMessage = message.split(' ');
  if (parsedMessage.length === 0 || parsedMessage[1] !== 'beers') {
    store.dispatch(SendResponse(getHelpBot3(), 'BOT_3'));
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
      else store.dispatch(SendResponse(getErrorBot3(), 'BOT_3'));
      break;
    default:
      store.dispatch(SendResponse(getErrorBot3(), 'BOT_3'));
      break;
  }
};

export default handleBot3;
