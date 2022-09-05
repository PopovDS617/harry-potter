import { configureStore } from '@reduxjs/toolkit';

import characterReducer from './characters/charactersSlice';
import potionReducer from './potions/potionsSlice';
import uiReducer from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    potion: potionReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
