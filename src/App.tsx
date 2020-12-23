import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import './App.css';
import ReduxView from '../src/views/Redux';
import QueryView from '../src/views/Query';
import HomeView from '../src/views/Home';
import Nav from '../src/shared/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/redux" component={ReduxView}></Route>
          <Route exact path="/query" component={QueryView}></Route>
          <Route exact path="/" component={HomeView}></Route>
          <Redirect exact path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
