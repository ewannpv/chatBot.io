import { combineReducers } from 'redux';

import data from './components/home-redux/reducer';
import dataSearch from './components/paris-events-search/reducer';

export default combineReducers({ data, dataSearch });
