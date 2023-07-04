import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: {},
});

export default authSlice.reducer;
