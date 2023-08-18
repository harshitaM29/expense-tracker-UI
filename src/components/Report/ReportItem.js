import classes from './Report.module.css';
import { Container } from 'react-bootstrap';
const ReportItem = (props) => {
    console.log(props.key)
    return (
        <li key={props.key}>
                
        <Container>
        <div className={classes.description}>
      
       <p>{props.url}</p>
     
        </div>
        
      

            </Container> 
            </li>
    )
}

export default ReportItem;