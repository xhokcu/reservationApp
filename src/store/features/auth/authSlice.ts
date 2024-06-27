import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginData } from 'types/ILoginData';

export interface AuthState {
  isAuthenticated: boolean;
  authData: ILoginData | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  authData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILoginData>) => {
      state.isAuthenticated = true;
      state.authData = action.payload;
      AsyncStorage.setItem('authData', JSON.stringify(action.payload));
      AsyncStorage.setItem('isAuthenticated', JSON.stringify(true));
    },
    logout: state => {
      state.isAuthenticated = false;
      state.authData = null;
      AsyncStorage.setItem('authData', JSON.stringify(null));
      AsyncStorage.setItem('isAuthenticated', JSON.stringify(false));
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
