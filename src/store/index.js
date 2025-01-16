import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { countReducer } from './countReducer';
import { usersReducer } from './usersReducer';
import createSagaMiddleware from 'redux-saga';
import { countWatcher } from '../saga/countSaga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    count: countReducer,
    users: usersReducer
})


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher)