// Add Auth0 to your `index.js` file, so that your application can use the authentication service.

import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client';
import App from './App.js';

// once you sign up for an Auth0 account, they will provide you with the domain and clientId
// to install Auth0 in React v18, use `--force` at the end of the install command.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>,
);
