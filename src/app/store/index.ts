import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { appConfig } from '@app/configs';

import userReducer from '@features/user/store/userSlice';

const userPersistConfig = {
  key: appConfig.user.storageKey,
  storage,
  whitelist: ['id', 'name', 'balance', 'currency'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
