import { sayHello, sayGoodBye } from './all-bots';
import handleBot1 from './bot-1';
import handleBot2 from './bot-2';
import handleBot3 from './bot-3';
import handleBot4 from './bot-4';

const startsWith = (str, word) => str.lastIndexOf(word, 0) === 0;
const splitMessage = (str, word) => str.split(word).pop();

const parseMessage = (message, bots) => {
  const messages = [];
  message.toLowerCase();

  if (startsWith(message, '@roger')) {
    messages.push(...handleBot1(splitMessage(message, '@roger'), bots[0]));
  } else if (startsWith(message, '@maria')) {
    messages.push(...handleBot2(splitMessage(message, '@maria'), bots[1]));
  } if (startsWith(message, '@pedro')) {
    messages.push(...handleBot3(splitMessage(message, '@pedro'), bots[2]));
  } if (startsWith(message, '@john')) {
    messages.push(...handleBot4(splitMessage(message, '@john'), bots[3]));
  }

  if (message.includes('hello')) {
    messages.push(...sayHello(bots));
  } else if (message.includes('bye')) {
    messages.push(...sayGoodBye(bots));
  }

  return { botMessages: messages, bots };
};

export default parseMessage;
