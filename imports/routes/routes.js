import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Authentication from '../ui/Authentication';
import Link from '../ui/Link';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import Signup from '../ui/Signup';

export const routes = (
  <Router>
    <div>
      <Route path='*' component={Authentication}/>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/links' component={Link}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </div>
  </Router>
);
