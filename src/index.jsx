// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

const preloadedState = {
  // TODO
  chatrooms: [ 'Habs4Life', 'TreeHuggers', 'Art History'],
  messages: [
              {
                "author":"anonymous92",
                "content":"Hello world!",
                "created_at":"2017-09-26T23:03:16.365Z"
              },
              {
                "author":"anonymous77",
                "content":"My name is anonymous77",
                "created_at":"2017-09-26T23:03:21.194Z"
              }
            ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChatroom: 'Art History'
};

// Reducers
import chatroomsReducer from "./reducers/chatrooms_reducer";
import messagesReducer from "./reducers/messages_reducer";
import currentUserReducer from "./reducers/current_user_reducer";
import selectedChatroomReducer from "./reducers/selected_chatroom_reducer";

// State and reducers
const reducers = combineReducers({
  // changeMe: (state = null, action) => state,
  chatrooms: chatroomsReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer,
  selectedChatroom: selectedChatroomReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));
const store = createStore(reducers, preloadedState, middlewares, composeEnhancers);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
