import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import App from './components/App';

let category = ['가구', '패브릭', '조명', '가전', '주방용품', '장식/소품', '수납/정리', '생활용품', '생필품'];

function reducerCategory(state = category, action){
  return state
}

let store = createStore(combineReducers({reducerCategory}));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);