import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Section from './containers/Section';
import ScrollToTop from './components/ScrollToTop'
import { news_articles } from './data/news_articles';
import { opinion_articles } from './data/opinion_articles';
import { sports_articles } from './data/sports_articles';
import { ae_articles } from './data/ae_articles';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/uni-news' render={() => <Section id="uni-news" header="UNI NEWS" articles={news_articles} next="City News" link="/city-news" key={0}/>} />
        <Route exact path='/city-news' render={() => <Section id="city-news" header="CITY NEWS" articles={news_articles} next="Opinion" link="/opinion" key={1}/>} />
        <Route exact path='/opinion' render={() => <Section id="opinion" header="OPINION" articles={opinion_articles} next="Sports" link="/sports" key={2} />} />
        <Route exact path='/sports' render={() => <Section id="sports" header="SPORTS" articles={sports_articles} next="A&E" link="/a&e" key={3}/>} />
        <Route exact path='/a&e' render={() => <Section id="a&e" header="A&E" articles={ae_articles} next="Home" link="/" key={4}/>} />
      </Switch>
    </Router>
  );
}

export default App;
