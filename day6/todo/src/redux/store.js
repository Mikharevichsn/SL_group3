import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialStore = {
  tasks: [],
  user: 'Serjo',
};

export const store = createStore(reducer, initialStore, composeWithDevTools());
