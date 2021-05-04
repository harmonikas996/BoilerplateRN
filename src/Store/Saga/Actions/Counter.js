import {createAction} from '@reduxjs/toolkit';

export const delayedIncrementSagaAction = createAction(
  'counter/delayedIncrementSagaAction',
);
