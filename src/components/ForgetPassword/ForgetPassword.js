import classes from './ForgetPassword.module.css';
import { Form, Button, ButtonGroup, Card } from 'react-bootstrap';
import { useState, useRef } from 'react';
import axios from 'axios';
const ForgetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const forgetPassHandler = async(e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
       setIsLoading(true);
        try {
        const response = await axios.post('http://localhost:4000/password/forgetpassword',{email:enteredEmail});
        setIsLoading(false);
          if(response) {
            console.log(response);
            alert(response.data.message)
          }
        } catch(err) {
          setIsLoading(false);
            alert(err.response.data);

          }
    }
    return (
        <Card className={classes.auth}>
        <h2>Forget Password</h2>
    <Form onSubmit={forgetPassHandler}>
  <Form.Group className={classes.control} controlId="email">
    <Form.Label>Email address</Form.Label>
    <input ref={emailInputRef} required type="email" placeholder="Enter email" />
  </Form.Group>
    <ButtonGroup  className={classes.actions} vertical>
    {isLoading && <Button  className={classes.toggle} type="button">
      Sending Request
  </Button>}
    {!isLoading && <Button variant="primary" type="submit">
       Submit
  </Button> }
 
  </ButtonGroup>
    </Form>
    </Card> 
    )
};

export default ForgetPassword;