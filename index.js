import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './src/components/App';
import rootReducer from './src/reducers/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  ,
	document.getElementById('root')
);
