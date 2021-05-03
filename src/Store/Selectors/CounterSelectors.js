import {createSelector} from 'reselect';

const couterSlice = state => state.CounterSlice;

export const selectCounterValue = createSelector(
  couterSlice,
  state => state.value,
);
