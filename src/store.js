import { createStore } from 'redux';
import characterReducer from './reducers';
//Default character state:
import defaultState from './state';

export const store = createStore(characterReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
