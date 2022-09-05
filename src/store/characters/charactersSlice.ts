import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CharacterState } from '../../models/data-models';
import getAllCharacters from './charactersService';

const initialState: CharacterState = {
  characters: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getCharacters = createAsyncThunk(
  'characters/getAll',
  async (_, thunkAPI) => {
    try {
      return await getAllCharacters();
    } catch (error: any) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.characters = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const characterActions = characterSlice.actions;
export default characterSlice.reducer;
