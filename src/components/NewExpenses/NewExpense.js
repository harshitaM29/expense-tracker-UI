import classes from './NewExpense.module.css';
import { Card,Button } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isShown, setIsShown] = useState(false);
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
           

        };
        props.onAddExpense(expenseData);
    };
    const openForm = ()  => {
        setIsShown(true);
    }

    const closeForm = () => {
        setIsShown(false);
    }
    return (
        <Card className={classes.expense}>
          {!isShown && <Button onClick={openForm}>Add Expense</Button>}  
          {isShown && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={closeForm}/>}
        </Card>
    )
};

export default React.memo(NewExpense);