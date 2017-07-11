import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import awards from './reducers/awards';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppReducers = combineReducers({
    awards,
});

const storeData = {};

export default createStore(
    AppReducers,
    storeData,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
);
