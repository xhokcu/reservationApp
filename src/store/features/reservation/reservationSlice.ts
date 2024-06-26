// src/redux/slices/reservationsSlice.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Reservation {
  id: string;
  username: string;
  date: string;
  time: string;
  note: string;
  city: string;
}

interface ReservationsState {
  reservations: Reservation[];
}

const loadPersistedReservations = async (): Promise<Reservation[]> => {
  try {
    const reservationsString = await AsyncStorage.getItem('reservations');
    if (reservationsString) {
      const data = JSON.parse(reservationsString) as Reservation[];
      initialState.reservations = data;
    }
  } catch (error) {
    console.error('Error loading reservations from AsyncStorage:', error);
  }
  return [];
};

const initialState: ReservationsState = {
  reservations: [],
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<Reservation>) => {
      state.reservations.push(action.payload);
      AsyncStorage.setItem('reservations', JSON.stringify(state.reservations));
    },
    updateReservation: (state, action: PayloadAction<Reservation>) => {
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

export const { addReservation, updateReservation, deleteReservation } =
  reservationsSlice.actions;
export default reservationsSlice.reducer;
