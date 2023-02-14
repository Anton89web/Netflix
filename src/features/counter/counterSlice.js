import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(

);

export const counterSlice = createSlice({
  name: 'counter',

  reducers: {

  },

  extraReducers: (builder) => {

  },
});

export default counterSlice.reducer;
