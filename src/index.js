import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, persistor} from './reduxConfig/ConfigRedux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
