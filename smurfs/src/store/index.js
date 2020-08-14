import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import smurfReducer from '../reducer';

export const store = createStore(smurfReducer, applyMiddleware(thunk));