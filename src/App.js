import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import CreditsPage from './containers/CreditsPage';

function App() {
  return (
      <Router>
        <Switch>
            <Route path='/' exact>
              <Home />
            </Route>   
            <Route path='/credits' exact>
                <CreditsPage />
            </Route>    
        </Switch>
      </Router>
  );
}

export default App;
