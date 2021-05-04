import {all} from 'redux-saga/effects';
import {counterSagas} from './Functions/Counter';

export default function* rootSaga() {
  yield all([...counterSagas]);
}
