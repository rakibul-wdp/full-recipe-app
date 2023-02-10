import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-s0t2brpud2p7n6km.us.auth0.com"
    clientId="9LdSKIhlB5Jz9epOs3rteIuWYi3N1Mwd"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);