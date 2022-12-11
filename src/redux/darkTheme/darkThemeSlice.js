import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'darkTheme',
  storage,
};

const initialState = {
  darkMode: false,
};

export const darkThemeSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    darkThemeSwitcher: (state, actions) => {
      state.darkMode = actions.payload;
    },
  },
});

export const { darkThemeSwitcher } = darkThemeSlice.actions;

export const persistedDarkThemeReducer = persistReducer(
  persistConfig,
  darkThemeSlice.reducer
);
