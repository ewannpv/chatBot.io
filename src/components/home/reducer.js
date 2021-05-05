import { actionsType } from './actions';
import Person from './class_person';
import Bot from './class_bot';

const initalState = {
  user: new Person('Guest', 'https://www.iconsdb.com/icons/preview/gray/guest-xxl.png'),
  bots: [new Bot('Maria', 'https://www.iconsdb.com/icons/preview/gray/guest-xxl.png'), new Bot('Pedro', 'https://www.iconsdb.com/icons/preview/gray/guest-xxl.png')],
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
