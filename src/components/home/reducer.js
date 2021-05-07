import { actionsType } from './actions';
import Person from './objects/person';
import Bot from './objects/bot';
import Message from './objects/message';
import parseMessage from './actions/message-parser';

const initalState = {
  user: new Person('Ewann', 'src/images/user.png', 'Hehe... Je ne suis pas un bot.'),
  bots: [
    new Bot('Roger', 'src/images/bot1.png', 'Je suis le bot 1.', 'BOT_1'),
    new Bot('Maria', 'src/images/bot2.png', 'Je suis le bot 2.', 'BOT_2'),
    new Bot('Pedro', 'src/images/bot3.png', 'Je suis le bot 3.', 'BOT_3'),
    new Bot('John', 'src/images/bot4.png', 'Je suis le bot 4.', 'BOT_4')
  ],
  messages: [new Message('this is a test', 'BOT_1'), new Message('same here', 'BOT_2'), new Message('Thanks both !', 'USER')]
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
  const { content } = action.payload;

  const { botMessages, bots } = parseMessage(content, [...state.bots]);
  messages.push(...botMessages);

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
