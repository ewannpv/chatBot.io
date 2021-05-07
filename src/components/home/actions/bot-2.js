import Message from '../objects/message';

const handleBot2 = (message, bot) => {
  const messages = [];
  messages.push(new Message(message, bot.key));
  bot.updateLastMessage();
  return messages;
};

export default handleBot2;
