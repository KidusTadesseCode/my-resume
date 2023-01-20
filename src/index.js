import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { store } from './ReduxStore/Store';
import {Provider} from "react-redux"

import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </HashRouter>
);