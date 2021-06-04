import React from 'react';
import axios from 'axios';
import Message from '../objects/message';
import { startsWith, splitMessage } from './utils';
import { SendResponse } from '../actions';
import store from '../../../store';
import { getHelpBot1, getErrorBot1 } from '../containers/helper-factory';

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
    store.dispatch(SendResponse(getErrorBot1(), 'BOT_1'));
  });
};

const handleBot1 = (message) => {
  const parsedMessage = message.split(' ');
  if (parsedMessage.length === 0 || parsedMessage[1] !== 'cat') {
    store.dispatch(SendResponse(getHelpBot1(), 'BOT_1'));
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
