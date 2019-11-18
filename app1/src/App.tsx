import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const App = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact>
          <div>Hey, I am the home page</div>
        </Route>
        <Route>
          <div>Default fallback route</div>
        </Route>
      </Switch>
    </Router>
  );
};

// export const reduxStore = store;
export default hot(App);
