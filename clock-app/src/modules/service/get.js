import { takeEvery } from 'redux-saga/effects';
import { createPromiseSaga, handleAsyncActions, reducerUtils } from '../../lib/asyncUtils';
import { useGet } from '../../modules/service/useAxios';

const REQUEST_GET = 'REQUEST_GET';
const REQUEST_GET_SUCCESS = 'REQUEST_GET_SUCCESS';
const REQUEST_GET_ERROR = 'REQUSET_GET_ERROR';

export const requestGet = (url, key, payload = {}) => ({ type: REQUEST_GET, url, key, payload });


const getSaga = createPromiseSaga(REQUEST_GET, useGet);

export function* getMethodSaga() {
    yield takeEvery(REQUEST_GET, getSaga);
}

const initialState = {
    famousSaying: reducerUtils.initial(),
    location: reducerUtils.initial()
}
export default function getReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GET:
        case REQUEST_GET_SUCCESS:
        case REQUEST_GET_ERROR:
            return handleAsyncActions(REQUEST_GET, action.key, true)(state, action);
        default:
            return state;
    }
}