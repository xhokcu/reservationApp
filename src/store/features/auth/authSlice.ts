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
    },
    logout: state => {
      state.isAuthenticated = false;
      state.authData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
