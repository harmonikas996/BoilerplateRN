import {all} from 'redux-saga/effects';
import {counterSagas} from './Functions/Counter';
import {userSagas} from './Functions/User';

export default function* rootSaga() {
  yield all([...counterSagas, ...userSagas]);
}
