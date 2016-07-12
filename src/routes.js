import React from 'react';
import {Route, IndexRoute} from "react-router";
import App from './components/App.js';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import MembersPage from './components/members/MembersPage';
import ElectoratesPage from './components/electorates/ElectoratesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="members" component={MembersPage} />
    <Route path="about" component={AboutPage} />
    <Route path="electorates" component={ElectoratesPage} />
  </Route>
);


