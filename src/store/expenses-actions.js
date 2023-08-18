import { expenseActions } from './expenses';
import axios from 'axios';
import { pageActions } from './page';

export const fetchExpenseData = (tokenId,page,limit) => {
    return async(dispatch) => {
       
        try {
            const response = await axios.get(`http://localhost:4000/expenses?page=${page}&limit=${limit}`, { headers: {"Authorization" : tokenId } });
           
            dispatch(expenseActions.replaceExpense({
                expense: response.data || [],
              
             }))
           
            
        }
    catch(error) {
                console.log(error)
            
        };
    };
}

export const sendExpenseItems = (expense, tokenId) => {
 
    return async(dispatch) => {
            try {
            const response = await axios.post(`http://localhost:4000/expenses`,expense, { headers: {"Authorization" : tokenId } })
               dispatch(expenseActions.addExpenses(response.data))
            }
           catch(err) {
            console.log(err)
           }
        
    }
}

export const deleteExpenseItems = (id,token) => {
    return async(dispatch) => {
        const deleteData = async() => {
            const response = await axios.delete(`http://localhost:4000/expense-delete/${id}`, { headers: {"Authorization" : token }});
            
            return response.data;
        }
        try {
                
            const expenseData = await deleteData();
            dispatch(expenseActions.deleteExpense(expenseData.id))
           } catch (error) {
               console.log(error)
           
       };
    
}
}

