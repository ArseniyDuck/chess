import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './board-slice';

const store = configureStore({
   reducer: {
      board: boardReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;