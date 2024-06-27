import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReservation } from 'types/IReservation';

interface ReservationsState {
  reservations: IReservation[];
}

const initialState: ReservationsState = {
  reservations: [],
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    setReservations: (state, action: PayloadAction<IReservation[]>) => {
      state.reservations = action.payload;
    },
    addReservation: (state, action: PayloadAction<IReservation>) => {
      state.reservations.push(action.payload);
      AsyncStorage.setItem('reservations', JSON.stringify(state.reservations));
    },
    updateReservation: (state, action: PayloadAction<IReservation>) => {
      const index = state.reservations.findIndex(
        reservation => reservation.id === action.payload.id,
      );
      if (index !== -1) {
        state.reservations[index] = action.payload;
      }
      AsyncStorage.setItem('reservations', JSON.stringify(state.reservations));
    },
    deleteReservation: (state, action: PayloadAction<string>) => {
      state.reservations = state.reservations.filter(
        reservation => reservation.id !== action.payload,
      );
      AsyncStorage.setItem('reservations', JSON.stringify(state.reservations));
    },
  },
});

export const {
  setReservations,
  addReservation,
  updateReservation,
  deleteReservation,
} = reservationsSlice.actions;
export default reservationsSlice.reducer;
