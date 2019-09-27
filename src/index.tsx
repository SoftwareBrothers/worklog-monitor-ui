import React from 'react';
import ReactDOM from 'react-dom';
import { AuthManager } from './components/AuthManager';
import './index.css';
import AuthorizedApp from './pages/AuthorizedApp';
import GuestApp from './pages/GuestApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AuthManager Anonymous={GuestApp} Authenticated={AuthorizedApp} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
