import { configureStore } from '@reduxjs/toolkit';
import userBalanceReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    userBalance: userBalanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
