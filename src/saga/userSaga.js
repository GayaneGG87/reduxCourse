import{put, takeEvery, call} from 'redux-saga/effects'
import { FETCH_USERS, setUsers } from '../store/usersReducer'

const fetchUserFromApi = ()=> fetch('https://jsonplaceholder.typicode.com/users')

function* fetchUserWorker(){
const data = yield call(fetchUserFromApi)
const json = yield call(()=> new  Promise(res=> res(data.json())))
console.log('fetch', json)
yield put(setUsers(json))
}
export function* userWatcher(){
yield takeEvery(FETCH_USERS, fetchUserWorker)
}