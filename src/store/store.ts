import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import reservationReducer from './features/reservation/reservationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    reservation: reservationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
