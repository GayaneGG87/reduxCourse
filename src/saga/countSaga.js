import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator } from "../store/countReducer";
import {put, takeEvery} from 'redux-saga/effects'

const delay = (ms)=> new Promise(res=>setTimeout(res, ms));
var t = 0
function* incementWorker(){

    console.log(t+=1);
    yield delay(1000)
    yield put(incrementCreator())
}
function* decrementWorker(){
    console.log(t-=1);
    yield delay(1000)
    yield put(decrementCreator())
}
 export function* countWatcher(){
 yield takeEvery(ASYNC_INCREMENT, incementWorker)
 yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}