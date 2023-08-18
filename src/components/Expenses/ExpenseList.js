import {  Card  } from 'react-bootstrap';
import classes from './ExpenseList.module.css';
import ExpenseItem from './ExpenseItem';
import { Fragment,  } from 'react';
import Pagination from '../Layout/Pagination';
const ExpenseList = (props) => {
   
    let data = Object.values(props.items || []);
  
    
    

   
    return (
        <Fragment>
       
        <Card className={classes.list}>
            <ul>
               
            {data.map((key) => (

            <ExpenseItem key={key.id} des={key.description} id={key.id}
            amount={key.amount} category={key.category} />
            ))} 
            
            </ul>
          
        </Card>
       <Pagination />
        </Fragment>
    )
};

export default ExpenseList;