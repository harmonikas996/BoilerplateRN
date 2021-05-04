import {createSelector} from 'reselect';

const couterSlice = state => state.CounterSlice;

export const selectCounterValue = createSelector(
  couterSlice,
  state => state.value,
);

export const selectCounterIsAdding = createSelector(
  couterSlice,
  state => state.isAdding,
);
