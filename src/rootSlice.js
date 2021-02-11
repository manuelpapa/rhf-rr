import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    firstName: null,
    lastName: null,
    age: null,
  },
  reducers: {
    enterFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    enterLastName: (state, action) => {
      state.lastName = action.payload;
    },
    enterAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const { enterFirstName, enterLastName, enterAge } = rootSlice.actions;
