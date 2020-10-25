import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from '@comp/home';
import Setting from '@comp/setting';

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/setting" component={Setting} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
