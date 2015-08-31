import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from 'js/app';
import One from 'js/app';
import Two from 'js/app';
import Three from 'js/app';


const routes = (
  <Route handler={App} path="/">
    <Route name="about" path="about" handler={Two} />
    <Route name="login" path="login" handler={One} />
    <Route name="register" path="register" handler={Three} />
    <Route name="account" path="account" handler={App}>
    </Route>
    <DefaultRoute name="home" handler={App} />
  </Route>
);

export default routes