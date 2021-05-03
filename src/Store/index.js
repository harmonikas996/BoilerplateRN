import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from './Slices/CounterSlice';

const combinedReducers = combineReducers({CounterSlice});

const store = configureStore({
  reducer: combinedReducers,
});

export {store};
