import { sayHello, sayGoodBye, sayPong } from './all-bots';
import handleBot1 from './bot-1';
import handleBot2 from './bot-2';
import handleBot3 from './bot-3';
import handleBot4 from './bot-4';
import { startsWith, splitMessage } from './utils';

const parseMessage = (data, message) => {
  const lowerCaseMessage = message.toLowerCase();
  const { bots } = data;
  if (startsWith(lowerCaseMessage, '@roger')) {
    handleBot1(splitMessage(lowerCaseMessage, '@roger'), bots[0]);
  } else if (startsWith(lowerCaseMessage, '@maria')) {
    handleBot2(splitMessage(lowerCaseMessage, '@maria'), bots[1]);
  } else if (startsWith(lowerCaseMessage, '@pedro')) {
    handleBot3(splitMessage(lowerCaseMessage, '@pedro'), bots[2]);
  } else if (startsWith(lowerCaseMessage, 'ping')) {
    sayPong(bots);
  } else if (lowerCaseMessage.includes('hello')) {
    sayHello(bots);
  } else if (lowerCaseMessage.includes('bye')) {
    sayGoodBye(bots);
  } else {
    handleBot4(bots[3]);
  }
};

export default parseMessage;
