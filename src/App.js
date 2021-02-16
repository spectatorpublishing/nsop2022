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
        <Route exact path='/news' render={() => <Section id="news" header="NEWS" articles={news_articles} next="Opinion" link="/opinion" />} />
        <Route exact path='/opinion' render={() => <Section id="opinion" header="OPINION" articles={opinion_articles} next="The Eye" link="/the-eye"/>} />
        <Route exact path='/the-eye' render={() => <Section id="eye" header="THE EYE" articles={eye_articles} next="Sports" link="/sports"/>} />
        <Route exact path='/sports' render={() => <Section id="sports" header="SPORTS" articles={sports_articles} next="a&e" link="/a&e"/>} />
        <Route exact path='/a&e' render={() => <Section id="a&e" header="SPORTS" articles={sports_articles} next="Home" link="/"/>} />
      </Switch>
    </Router>
  );
}

export default App;
