import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISpellState } from '../../models/data-models';

import getAllSpells from './spellsService';

const initialState: ISpellState = {
  spells: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getSpells = createAsyncThunk(
  'spells/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await getAllSpells();

      return response;
    } catch (err) {
      throw new Error('faile to fetch');
    }
  }
);

export const spellsSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpells.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSpells.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.spells = action.payload;
      })
      .addCase(getSpells.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const characterActions = spellsSlice.actions;
export default spellsSlice.reducer;
