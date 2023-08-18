import { createSlice } from '@reduxjs/toolkit';

const initialPremiumState = {premiumItems: [], downloadedData:[]};

const premiumSlice =  createSlice({
    name:'premium',
    initialState:initialPremiumState,
    reducers: {
        replaceItems(state,action) {
           
            state.premiumItems = action.payload.items;
          
        },
        replaceDownloadedItems(state,action) {
           
             state.downloadedData = action.payload.downloadedData;
           
         },
         addDownloadedItems(state,action) {
           
            state.downloadedData.push({
                id:Math.random(),
                ...action.payload
               })
          
        },
         
        
    }

});

export const premiumActions = premiumSlice.actions;

export default premiumSlice.reducer;