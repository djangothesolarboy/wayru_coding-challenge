import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialState = {
  name: '',
  email: '',
  message: ''
}

export const store = createStore(combineForms({
  user: initialState
}));