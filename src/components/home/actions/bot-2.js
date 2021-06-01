import React from 'react';
import axios from 'axios';
import Message from '../objects/message';
import { SendResponse } from '../actions';
import store from '../../../store';
import { CryptoAssetsContainer, CryptoAssetContainer, CryptoAssetHistoryContainer } from '../containers/crypto-assets-container';
import { getHelpBot2, getErrorBot2 } from '../containers/helper-factory';

const url = 'https://api.coincap.io/v2/assets';

const getAssets = () => {
  axios.get(url).then((response) => {
    const { data } = response.data;
    store.dispatch(SendResponse(new Message(<CryptoAssetsContainer data={data} />, 'BOT_2')));
  }).catch(() => {
    store.dispatch(SendResponse(getErrorBot2(), 'BOT_2'));
  });
};

const getAssetsById = (id) => {
  axios.get(`${url}/${id}`).then((response) => {
    const { data } = response.data;
    store.dispatch(SendResponse(new Message(<CryptoAssetContainer data={data} />, 'BOT_2')));
  }).catch(() => {
    store.dispatch(SendResponse(getErrorBot2(), 'BOT_2'));
  });
};

const getAssetsHistory = (id) => {
  axios.get(`${url}/${id}/history?interval=d1`).then((response) => {
    const { data } = response.data;
    data.id = id;
    store.dispatch(SendResponse(new Message(<CryptoAssetHistoryContainer data={data} />, 'BOT_2')));
  }).catch(() => {
    store.dispatch(SendResponse(getErrorBot2(), 'BOT_2'));
  });
};

const handleBot2 = (message, bot) => {
  bot.updateLastMessage();
  const parsedMessage = message.split(' ');
  if (parsedMessage.length === 0 || parsedMessage[1] !== 'assets') {
    store.dispatch(SendResponse(getHelpBot2(), 'BOT_2'));
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
      else store.dispatch(SendResponse(getErrorBot2(), 'BOT_2'));
      break;
    default:
      store.dispatch(SendResponse(getErrorBot2(), 'BOT_2'));
      break;
  }
};

export default handleBot2;
