import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@app/store";

const selectUserSlice = (state: RootState) => state.user;

export const selectUserId = (s: RootState) => selectUserSlice(s).id;
export const selectUserName = (s: RootState) => selectUserSlice(s).name;
export const selectBalance = (s: RootState) => selectUserSlice(s).balance;
export const selectCurrency = (s: RootState) => selectUserSlice(s).currency;

export const selectUserProfile = createSelector(
  [selectUserId, selectUserName, selectCurrency],
  (id, name, currency) => ({ id, name, currency })
);
