import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import axios from 'axios';

import App from './components/App';
import categoryReducer from './reducer/category';
import userReducer from './reducer/user';

// axios.defaults.baseURL = "url";
axios.defaults.withCredentials = true;



let store = createStore(combineReducers({categoryReducer, userReducer}));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);