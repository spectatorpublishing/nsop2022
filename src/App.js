import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Section from './containers/Section';

import { news_articles } from './data/news_articles';
import { opinion_articles } from './data/opinion_articles';
import { eye_articles } from './data/eye_articles';
import { sports_articles } from './data/sports_articles';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/news' render={() => <Section header="NEWS" color="#FFC0A5" articles={news_articles} />} />
        <Route exact path='/opinion' render={() => <Section header="OPINION" color="#FFC0A5" articles={opinion_articles} />} />
        <Route exact path='/the-eye' render={() => <Section header="THE EYE" color="#FFC0A5" articles={eye_articles} />} />
        <Route exact path='/sports' render={() => <Section header="SPORTS" color="#FFC0A5" articles={sports_articles} />} />
      </Switch>
    </Router>
  );
}

export default App;
