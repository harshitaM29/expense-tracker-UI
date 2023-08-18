import classes from './ExpenseForm.module.css';
import { Form, Button, Container } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
const ExpenseForm = (props) => {
    const [enteredDes, setEnteredDes] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredCategory, setEnteredCategory] = useState('');

    const updateDes = (e) =>{
        setEnteredDes(e.target.value);
    }

    const updateAmount = (e) =>{
        setEnteredAmount(e.target.value);

    }
    const updateCategory = (e) => {
        setEnteredCategory(e.target.value);
    }
    const addExpense = (e) => {
        e.preventDefault();
        
        const expenseDetails = {
            description: enteredDes,
            amount: enteredAmount,
            category:enteredCategory
        }
        props.onSaveExpenseData(expenseDetails);
        setEnteredDes('');
        setEnteredAmount('');
        setEnteredCategory('');
        props.onCancel();
    }
    const cancelForm = (e) => {
        props.onCancel();
    }
    return (
        <Form onSubmit={addExpense}>
    <Container className={classes.controls}>
      <Form.Group className={classes.control} controlId="description">
        <Form.Label>Expense Description</Form.Label>
        <Form.Control type="text" value={enteredDes} onChange={updateDes} />
      </Form.Group>

      <Form.Group className={classes.control} controlId="amount">
        <Form.Label>Expense Amount</Form.Label>
        <Form.Control type="number" value={enteredAmount} onChange={updateAmount} />
      </Form.Group>
      <Form.Group className={classes.control} controlId="category">
        <Form.Label>Expense Category</Form.Label>
      <Form.Select value={enteredCategory} onChange={updateCategory} >
      <option>Select Category</option>
             <option value="Fuel">Fuel</option>
             <option value="Food">Food</option>
             <option value="Electricity">Electricity</option>
             <option value="Movies">Movies</option>
     </Form.Select>
     </Form.Group>
     </Container>
     <Container className={classes.actions}>
     <Button type="button" onClick={cancelForm}>Cancel</Button>
      <Button type="submit">
        Add Expense
      </Button>
      </Container>
    
    </Form>
    
    )
};

export default React.memo(ExpenseForm);