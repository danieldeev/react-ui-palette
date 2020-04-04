import React from 'react';
import ReactDOM from 'react-dom';

import './style/materialize/index.css';
import './style/font/fonts.css';
import './style/icon/material-icons.css';
import './style/animate/animate.min.css';

import App from './view/app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
