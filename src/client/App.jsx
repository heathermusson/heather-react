import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import FoodwastePage from './pages/FoodwastePage.jsx';
import SmilePage from './pages/SmilePage.jsx';

const App = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/contact' component={ContactPage} />
    <Route path='/foodwaste' component={FoodwastePage} />
    <Route path='/smile' component={SmilePage} />
  </Switch>
);

export default withRouter(App);