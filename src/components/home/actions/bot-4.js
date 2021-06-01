import { SendResponse } from '../actions';
import store from '../../../store';
import getHelpBot4 from '../containers/helper-factory';

const handleBot4 = (bot) => {
  store.dispatch(SendResponse(getHelpBot4(), bot.key));
};

export default handleBot4;
