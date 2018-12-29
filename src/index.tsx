/**
 * External Dependencies
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * Internal Dependencies
 */
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// DOM
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

// Register Service Worker
registerServiceWorker();
