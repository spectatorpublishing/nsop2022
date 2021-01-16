import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import Home from './containers/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
            <Route path='/' exact>
              <Home />
            </Route>       
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
