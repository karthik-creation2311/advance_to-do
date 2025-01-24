import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the use of 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Create root using ReactDOM.createRoot() for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
