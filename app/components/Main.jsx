import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Sources from './Sources';
import Login from './Login';
import Headlines from './Headlines';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/sources/:source/:sortBy" component={Headlines} />
      <Route exact path="/sources" component={Sources} />
    </Switch>
  </Router>),
document.getElementById('app'));
