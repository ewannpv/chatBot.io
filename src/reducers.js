import { combineReducers } from 'redux';

import data from './components/home-redux/reducer';
import dataSearch from './components/paris-events-search/reducer';
import chatBot from './components/home/reducer';

export default combineReducers({ data, dataSearch, chatBot });
