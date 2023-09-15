import { createSlice } from '@reduxjs/toolkit';
import { TAuthState, TUser } from '../types';

const initialState: TAuthState = {
    user: {} as TUser,
    isAuth: !!localStorage.getItem('accessToken'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
});

export const { /* Добавьте здесь ваше состояние */ } = authSlice.actions;
export default authSlice.reducer;
