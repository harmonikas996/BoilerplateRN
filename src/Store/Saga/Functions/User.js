import {delay, put, takeEvery} from '@redux-saga/core/effects';
import {resetUser, loginUser, setIsLoading} from '../../Slices/User';
import {login, logout} from '../Actions/User';

export function* loginSaga({payload}) {
  try {
    yield put(setIsLoading(true));
    yield delay(2000);
    yield put(
      loginUser({user: {username: payload.username}, userToken: 'TestToken'}),
    );
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* logoutSaga() {
  try {
    yield put(setIsLoading(true));
    yield delay(1000);
    yield put(resetUser());
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setIsLoading(false));
  }
}

export const userSagas = [
  takeEvery(login, loginSaga),
  takeEvery(logout, logoutSaga),
];
