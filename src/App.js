import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import Orientation from './containers/Orientation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
            <Route path='/' exact>
              <Orientation />
            </Route>       
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
