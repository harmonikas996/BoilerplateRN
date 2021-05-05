import {createSlice} from '@reduxjs/toolkit';

const initialState = {user: null, userToken: null, isLoading: false};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, {payload}) {
      state.user = payload.user;
      state.userToken = payload.userToken;
    },
    setIsLoading(state, {payload}) {
      state.isLoading = payload;
    },
    resetUser: _ => initialState,
  },
});

export const {loginUser, setIsLoading, resetUser} = UserSlice.actions;
export default UserSlice.reducer;
