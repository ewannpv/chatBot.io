import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomeRedux from './components/home-redux';
import ParisEventsSearch from './components/paris-events-search';
import Home from './components/home';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/person" component={HomeRedux} exact />
        <Route path="/paris-events/" component={ParisEventsSearch} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
