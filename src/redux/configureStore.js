import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { routerReducer } from '../../node_modules/react-router-redux/lib/reducer'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import ThunkMiddleWare from 'redux-thunk'
import rootReducer from './reducers'
import createFetchMiddleware from 'redux-composable-fetch';
import DevTools from './DevTools';

const FetchMiddleware = createFetchMiddleware({
    afterFetch({ action, result }) {
        return result.json().then(data => {
            return Promise.resolve({
                action,
                result: data,
            });
        });
    },
});


const finalCreateStore = compose(
    applyMiddleware(
        ThunkMiddleWare,
        FetchMiddleware,
        routerMiddleware(browserHistory)),
    DevTools.instrument()
)(createStore)

const reducers = combineReducers(Object.assign({}, rootReducer, {routing: routerReducer}));

export default function configureStore(initialState) {
    const store = finalCreateStore(reducers, initialState);
    return store
}

