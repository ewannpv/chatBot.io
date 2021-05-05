import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomeRedux from './components/home-redux';
import ParisEventsSearch from './components/paris-events-search';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeRedux} exact />
        <Route path="/paris-events/" component={ParisEventsSearch} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
