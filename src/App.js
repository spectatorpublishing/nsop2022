import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import CreditsPage from './containers/CreditsPage';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/credits' component={CreditsPage} />
        </Switch>
      </Router>
  );
}

export default App;
