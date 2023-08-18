    import expenseReducer from './expenses';
import authReducer from './auth';
import premiumReducer from './premium';
import pageReducer from './page';
    import { configureStore } from '@reduxjs/toolkit';

    const store = configureStore({
        reducer: {auth:authReducer ,expense:expenseReducer, premium:premiumReducer, page:pageReducer}
    });
    
    export default store;