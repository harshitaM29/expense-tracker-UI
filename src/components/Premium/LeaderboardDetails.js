import classes from './LeaderboardItem.module.css';
import { Container } from 'react-bootstrap';

const LeaderboardDetails = (props) => {
    let amt;
    if(props.amount === null) {
        amt = 0
    } else {
        amt = props.amount
    }
    return (
        <Container>
        <div className={classes.description}>
       <h5>Name: {props.name} </h5>
           
       <h5>Amount: {amt}</h5>
     
        </div>
        
      

            </Container> 
    )
};

export default LeaderboardDetails;