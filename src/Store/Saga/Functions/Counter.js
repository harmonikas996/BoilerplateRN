import {delay, put, takeEvery} from '@redux-saga/core/effects';
import {incrementByAmount, setIsAdding} from '../../Slices/Counter';
import {delayedIncrementSagaAction} from '../Actions/Counter';

export function* delayedIncrementSaga({payload}) {
  try {
    yield put(setIsAdding(true));
    yield delay(2000);
    yield put(incrementByAmount(payload));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setIsAdding(false));
  }
}

export const counterSagas = [
  takeEvery(delayedIncrementSagaAction, delayedIncrementSaga),
];
