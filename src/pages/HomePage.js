import NewExpense from "../components/NewExpenses/NewExpense";
import {useDispatch, useSelector} from 'react-redux';
import { Fragment } from "react";
import ExpenseList from "../components/Expenses/ExpenseList";
import { sendExpenseItems } from "../store/expenses-actions";
import Header from "../components/Layout/Header";
const HomePage = () => {
    const dispatch = useDispatch();
    const receivedExpenses = useSelector(state => state.expense.expense)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const token = localStorage.getItem('token')
    const addExpenseHandler = expense => {
       
        dispatch(sendExpenseItems(expense,token));
        
    }
    let expenses = []
    if(receivedExpenses !== null){
        expenses = receivedExpenses;
    }
    if(!isLoggedIn) {
        expenses = [];
    }
    
    return (
        <Fragment>
        <Header />
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpenseList items={(expenses !== null) ? expenses : ''} />
        </Fragment>
    )
};

export default HomePage;