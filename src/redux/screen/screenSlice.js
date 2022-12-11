import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screenResolution: '',
};

export const screenSlice = createSlice({
  name: 'screenStatus',
  initialState,
  reducers: {
    getScreenResolution: (state, actions) => {
      state.screenResolution = actions.payload;
    },
  },
});

export const { getScreenResolution } = screenSlice.actions;
