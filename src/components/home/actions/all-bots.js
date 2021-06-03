import Message from '../objects/message';
import store from '../../../store';
import { SendResponse } from '../actions';

export const sayHello = () => {
  const { bots } = store.getState().chatBot;
  bots.forEach((bot) => {
    store.dispatch(SendResponse(new Message(bot.hello(), bot.key), bot.key));
  });
};

export const sayGoodBye = () => {
  const { bots } = store.getState().chatBot;
  bots.forEach((bot) => {
    store.dispatch(SendResponse(new Message('See you soon !', bot.key), bot.key));
  });
};

export const sayPong = () => {
  const { bots } = store.getState().chatBot;
  bots.forEach((bot) => {
    store.dispatch(SendResponse(new Message('pong', bot.key), bot.key));
  });
};
