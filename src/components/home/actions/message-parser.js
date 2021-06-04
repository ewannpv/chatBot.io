import { sayHello, sayGoodBye, sayPong } from './all-bots';
import handleBot1 from './bot-1';
import handleBot2 from './bot-2';
import handleBot3 from './bot-3';
import handleBot4 from './bot-4';
import { startsWith, splitMessage } from './utils';

const ParseMessage = (message) => {
  const lowerCaseMessage = message.toLowerCase();
  if (startsWith(lowerCaseMessage, '@roger')) {
    handleBot1(splitMessage(lowerCaseMessage, '@roger'));
  } else if (startsWith(lowerCaseMessage, '@maria')) {
    handleBot2(splitMessage(lowerCaseMessage, '@maria'));
  } else if (startsWith(lowerCaseMessage, '@pedro')) {
    handleBot3(splitMessage(lowerCaseMessage, '@pedro'));
  } else if (startsWith(lowerCaseMessage, 'ping')) {
    sayPong();
  } else if (lowerCaseMessage.includes('hello')) {
    sayHello();
  } else if (lowerCaseMessage.includes('bye')) {
    sayGoodBye();
  } else {
    handleBot4();
  }
};

export default ParseMessage;
