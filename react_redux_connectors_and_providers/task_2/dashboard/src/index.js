import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import Notifications from "./Notifications/Notifications";
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="root-notifications">
        <Notifications />
      </div>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
