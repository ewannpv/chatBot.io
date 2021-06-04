import { SendResponse } from '../actions';
import store from '../../../store';
import { getHelpBot4 } from '../containers/helper-factory';

const handleBot4 = () => {
  store.dispatch(SendResponse(getHelpBot4(), 'BOT_4'));
};

export default handleBot4;
