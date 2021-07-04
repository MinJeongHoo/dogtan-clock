import { combineReducers } from 'redux';
import pageReducer from './pageEvent';
import { all } from 'redux-saga/effects';
import getReducer, { getMethodSaga } from './service/get';

const rootReducer = combineReducers({
    pageReducer,
    getReducer
});

export function* rootSaga() {
    yield all([getMethodSaga()]);
}

export default rootReducer;