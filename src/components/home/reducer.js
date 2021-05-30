import { actionsType } from './actions';
import Person from './objects/person';
import Bot from './objects/bot';
import Message from './objects/message';

const initalState = {
  user: new Person('Ewann', 'src/images/user.png', 'Hehe.. look who\'s here. I\'m you so do not try to ping me.'),
  bots: [
    new Bot('Roger', 'src/images/bot1.png', 'If you want to see cute cats, ping me!', 'BOT_1'),
    new Bot('Maria', 'src/images/bot2.png', 'I am an expert in cryptocurrency, do not hesitate to ping me!', 'BOT_2'),
    new Bot('Pedro', 'src/images/bot3.png', 'If you\'r looking for some beers, ping me!', 'BOT_3'),
    new Bot('John', 'src/images/bot4.png', 'If you need help, just ping me as well.', 'BOT_4')
  ],
  messages: [],
  imgLoaded: false
};

const SendUserMessage = (state, action) => {
  const messages = [...state.messages];
  const { user } = state;
  const { content } = action.payload;

  messages.push(new Message(content, 'USER'));
  user.updateLastMessage();

  return {
    ...state,
    user,
    messages
  };
};

const SendResponse = (state, action) => {
  const messages = [...state.messages];
  const { message } = action.payload;
  const { key } = action.payload;
  const bots = [...state.bots];
  bots.forEach((bot) => {
    if (key === bot.key) { bot.updateLastMessage(); }
  });
  messages.push(message);
  return {
    ...state,
    bots,
    messages
  };
};

const data = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.ON_MESSAGE:
      return SendUserMessage(state, action);
    case actionsType.ON_RESPONSE:
      return SendResponse(state, action);
    default:
      return state;
  }
};

export default data;
