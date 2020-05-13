// Esse arquivo depende do react-router-dom
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
