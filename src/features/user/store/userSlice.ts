import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserBalanceState {
  balance: number;
}

const initialState: UserBalanceState = {
  balance: 0,
};

const userBalanceSlice = createSlice({
  name: 'userBalance',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    addToBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    subtractFromBalance: (state, action: PayloadAction<number>) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      }
    },
    clearBalance: (state) => {
      state.balance = 0;
    },
  },
});

export const {
  setBalance,
  addToBalance,
  subtractFromBalance,
  clearBalance
} = userBalanceSlice.actions;

export default userBalanceSlice.reducer;
