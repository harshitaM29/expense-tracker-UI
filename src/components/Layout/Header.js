import classes from './Header.module.css';
import { Container, Button, Nav, Navbar} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/order-actions';
import useRazorpay from "react-razorpay";
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { fetchPremiumLeaderboardData } from '../../store/premium-actions';
import { authActions } from '../../store/auth';
import React from 'react';
const Header = () => {
    const isPremium = localStorage.getItem('isPremium');


    
    const history = useHistory();
    const token = localStorage.getItem('token')
    const [Razorpay] = useRazorpay();
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(createOrder(Razorpay,token));
        e.preventDefault();
       
    }
    const showLeaderboard = (e) => {
      history.push('/leaderboard')
      dispatch(fetchPremiumLeaderboardData(token))
      e.preventDefault();
     
  }
   
    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(authActions.logout());
      history.replace('/')
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className={classes.nav}>
        <Container fluid>
          <Navbar.Brand href="#">Expense Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
          
              <Navbar.Text><NavLink to='/home' style={{ textDecoration: 'none', }}>Home</NavLink></Navbar.Text>
              {isPremium === 'true' ? <Navbar.Text><NavLink to='/report' style={{ textDecoration: 'none',  marginLeft:'0.5rem' }}>Report</NavLink></Navbar.Text>
              : '' }
            </Nav>
           
              {isPremium === 'true' ? <Button  onClick={showLeaderboard}>Leaderboard</Button> : ''}
              <Button onClick={handleLogout} style={{ marginLeft:'0.5rem' }}>Logout</Button>
             {isPremium === 'true' ? 
            
             <Navbar.Text style={{ marginLeft:'0.5rem' }}>You're Premium User</Navbar.Text> 
             : <Button onClick={handleClick}>Buy Premium</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};

export default React.memo(Header);