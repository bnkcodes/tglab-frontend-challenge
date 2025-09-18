import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserBalanceState {
  balance: number;
  isLoading: boolean;
}

const initialState: UserBalanceState = {
  balance: 0,
  isLoading: false,
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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
  setLoading,
  clearBalance
} = userBalanceSlice.actions;

export default userBalanceSlice.reducer;
