import { createSlice } from '@reduxjs/toolkit';


const initialPageState = {currentPage:null,nextPage:null,previousPage:null,lastPage:null,hasNextPage:false,hasPreviousPage:false}

const pageSlice = createSlice({
    name: 'pages',
    initialState:initialPageState,
    reducers: {
       pageInfo(state,action) {
           state.currentPage = action.payload.currentPage;
           state.nextPage = action.payload.nextPage;
           state.previousPage = action.payload.previousPage;
           state.lastPage = action.payload.lastPage;
           state.hasPreviousPage = action.payload.hasPreviousPage;
           state.hasNextPage = action.payload.hasNextPage;
          
        },
        
    }
});

export const pageActions = pageSlice.actions;

export default pageSlice.reducer;