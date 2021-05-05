import {combineReducers} from 'redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import CounterSlice from './Slices/Counter';
import UserSlice from './Slices/User';
import rootSaga from './Saga';

const combinedReducers = combineReducers({CounterSlice, UserSlice});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

const store = configureStore({
  reducer: combinedReducers,
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export {store};
