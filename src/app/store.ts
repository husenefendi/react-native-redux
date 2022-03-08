import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '~features/counter/counterSlice';
import postReducer from '~features/post/postSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
