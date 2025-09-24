import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { User } from '@shared/types/auth';

interface UserState {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

const initialState: UserState = {
  id: '',
  name: '',
  balance: 0,
  currency: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.id = payload.id;
      state.name = payload.name;
      state.balance = payload.balance;
      state.currency = payload.currency;
    },
    clearUser: (state) => {
      state.id = '';
      state.name = '';
      state.balance = 0;
      state.currency = '';
    },
    setBalance: (state, { payload }: PayloadAction<number>) => {
      if (Number.isFinite(payload) && payload >= 0) state.balance = payload;
    },
    addToBalance: (state, { payload }: PayloadAction<number>) => {
      if (Number.isFinite(payload) && payload >= 0) state.balance += payload;
    },
    subtractFromBalance: (state, { payload }: PayloadAction<number>) => {
      if (Number.isFinite(payload) && payload >= 0)
        state.balance = Math.max(0, state.balance - payload);
    },
  },
});

export const {
  setUser, clearUser, setBalance, addToBalance, subtractFromBalance,
} = slice.actions;

export default slice.reducer;
