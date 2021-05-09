import { sayHello, sayGoodBye } from './all-bots';
import handleBot1 from './bot-1';
import handleBot2 from './bot-2';
import handleBot3 from './bot-3';
import handleBot4 from './bot-4';
import { startsWith, splitMessage } from './utils';

const parseMessage = (data, message) => {
  const messages = [null];
  const lowerCaseMessage = message.toLowerCase();
  const { bots } = data;
  if (startsWith(lowerCaseMessage, '@roger')) {
    handleBot1(splitMessage(lowerCaseMessage, '@roger'), bots[0]);
  } else if (startsWith(lowerCaseMessage, '@maria')) {
    handleBot2(splitMessage(lowerCaseMessage, '@maria'), bots[1]);
  } else if (startsWith(lowerCaseMessage, '@pedro')) {
    handleBot3(splitMessage(lowerCaseMessage, '@pedro'), bots[2]);
  } else if (startsWith(lowerCaseMessage, '@john')) {
    handleBot4(splitMessage(lowerCaseMessage, '@john'), bots[3]);
  } else if (lowerCaseMessage.includes('hello')) {
    sayHello(bots);
  } else if (lowerCaseMessage.includes('bye')) {
    sayGoodBye(bots);
  }

  return { botMessages: messages, bots };
};

export default parseMessage;
