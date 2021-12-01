import { createStore, applyMiddleware } from 'redux';
import { combineForms } from 'react-redux-form';
import { logger } from 'redux-logger';
const thunk = require('redux-thunk').default;
// const logger = reduxLogger();

const initialState = {
  name: '',
  email: '',
  message: ''
}

export const store = createStore(combineForms({
  user: initialState
}), applyMiddleware(thunk, logger));