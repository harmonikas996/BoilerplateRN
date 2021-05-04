import {createSlice} from '@reduxjs/toolkit';

const initialState = {value: 0, isAdding: false};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, {payload}) {
      state.value += payload;
    },
    setIsAdding(state, {payload}) {
      state.isAdding = payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setIsAdding,
} = CounterSlice.actions;
export default CounterSlice.reducer;
