import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import rootReducer from '../Reducers/combine';
import thunk from 'redux-thunk';
// import { applyMiddleware, legacy_createStore as createStore } from 'redux';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
