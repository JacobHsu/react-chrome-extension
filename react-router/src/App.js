import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './Main'
import List from './List'
import Welcome from './Welcome'


import './App.css';

function App() {
  console.log('window.location', window.location.pathname)
  return (
    <BrowserRouter>
        <Route path="/" component={Main} />
      <Switch>
        <Route path="/Welcome" component={Welcome}  />
        <Route path="/List" component={List}  />
        <Route render={() => <h1>{window.location.pathname} Page not found</h1>} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
