import { Button, Container } from 'react-bootstrap';
import classes from './ExpenseItem.module.css';
import { Fragment } from 'react';

const ExpenseDetails = (props) => {
    return (
        <Container>
        <div className={classes.description}>
       <h2>{props.des}</h2>
            <h2>{props.category}</h2>
            
            <div className={classes.price}>{props.amount}</div>
       
        </div>
        <Container className={classes.action}>
            
            <Button onClick={props.onRemove}>Delete</Button>
          
            </Container> 

            </Container> 
    )
};

export default ExpenseDetails;