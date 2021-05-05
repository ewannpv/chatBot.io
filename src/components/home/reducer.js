import { actionsType } from './actions';
import Person from './classes/class_person';
import Bot from './classes/class_bot';

const initalState = {
  user: new Person('Ewann', 'src/images/user.png', 'Hehe... Je ne suis pas un bot.'),
  bots: [new Bot('Roger', 'src/images/bot1.png', 'Je suis le bot 1.'), new Bot('Maria', 'src/images/bot2.png', 'Je suis le bot 2.'), new Bot('Pedro', 'src/images/bot3.png', 'Je suis le bot 3.')],
  Message: []
};

const searchEvent = (action) => {
  const newState = [...action.data];

  return newState;
};

const data = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.SEARCH_EVENTS:
      return searchEvent(action);
    default:
      return state;
  }
};

export default data;
