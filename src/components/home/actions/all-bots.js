import Message from '../objects/message';
import store from '../../../store';
import { SendResponse } from '../actions';

export const sayHello = (bots) => {
  bots.forEach((bot) => {
    store.dispatch(SendResponse(new Message(bot.hello(), bot.key), bot.key));
  });
};

export const sayGoodBye = (bots) => {
  bots.forEach((bot) => {
    store.dispatch(SendResponse(new Message('See you soon !', bot.key), bot.key));
  });
};

export const sayPong = (bots) => {
  bots.forEach((bot) => {
    store.dispatch(SendResponse(new Message('pong', bot.key), bot.key));
  });
};
