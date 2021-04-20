import {createStore, applyMiddleware} from 'redux';
import artworkReducer from './reducers/artworkReducer';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(artworkReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));