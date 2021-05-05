import {createSelector} from 'reselect';

const userSlice = state => state.UserSlice;

export const selectUser = createSelector(userSlice, state => state.user);

export const selectUserIsLoading = createSelector(
  userSlice,
  state => state.isLoading,
);

export const selectUserToken = createSelector(
  userSlice,
  state => state.userToken,
);
