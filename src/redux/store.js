import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { screenSlice } from './screen/screenSlice';
import { persistedDarkThemeReducer } from './darkTheme/darkThemeSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    theme: persistedDarkThemeReducer,
    screen: screenSlice.reducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
