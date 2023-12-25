import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  flights: [],
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  extraReducers: (builder) => {},
});

export default flightSlice.reducer;
