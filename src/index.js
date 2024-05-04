import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PriceContext from './PriceContext.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PriceContext>
  <App />
  </PriceContext>
  </React.StrictMode>
);


