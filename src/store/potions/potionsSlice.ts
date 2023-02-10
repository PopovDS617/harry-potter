import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CharacterState, PotionState } from '../../models/data-models';

import getAllPotions from './potionsService';

const initialState: PotionState = {
  potions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getPotions = createAsyncThunk(
  'potions/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await getAllPotions();

      return response;
    } catch (err) {
      throw new Error('faile to fetch');
    }
  }
);

export const potionsSlice = createSlice({
  name: 'potion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPotions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPotions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.potions = action.payload;
      })
      .addCase(getPotions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const characterActions = potionsSlice.actions;
export default potionsSlice.reducer;
