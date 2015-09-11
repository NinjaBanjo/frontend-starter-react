import React from 'react';
import Router from 'react-router';
import routes from 'js/routes';
import api from 'js/api'


Router.run(routes, Router.HistoryLocation, (Handler, state ) => {
  React.render(<Handler {...state} />, document.body);
});

