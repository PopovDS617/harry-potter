import { configureStore } from '@reduxjs/toolkit';

import characterReducer from './characters/charactersSlice';
import potionReducer from './potions/potionsSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    potion: potionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
