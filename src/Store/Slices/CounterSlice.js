import {createSlice} from '@reduxjs/toolkit';

const initialState = {value: 0};

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
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = CounterSlice.actions;
export default CounterSlice.reducer;
