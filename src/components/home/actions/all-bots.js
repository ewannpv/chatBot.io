import Message from '../objects/message';

export const sayHello = (bots) => {
  const messages = [];
  bots.forEach((bot) => {
    messages.push(new Message(bot.hello(), bot.key));
    bot.updateLastMessage();
  });
  return messages;
};

export const sayGoodBye = (bots) => {
  const messages = [];
  bots.forEach((bot) => {
    messages.push(new Message('See you soon !', bot.key));
    bot.updateLastMessage();
  });
  return messages;
};
