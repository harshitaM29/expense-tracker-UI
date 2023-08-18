import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token')
const initialAuthState = {tokenId: null, isLoggedIn:!!token,isPremium:null};

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers: {
        login(state, action) {
            console.log(action.payload)
            state.tokenId = action.payload.idToken
            state.isLoggedIn = true
            state.isPremium = action.payload.isPremium
        },
        logout(state, action) {
            localStorage.clear();
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;