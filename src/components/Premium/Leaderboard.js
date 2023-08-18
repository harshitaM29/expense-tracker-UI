import classes from './Leaderboard.module.css';
import Header from '../Layout/Header';
import { Fragment,  } from 'react';
import { useSelector } from 'react-redux';
import {  Card } from 'react-bootstrap';
import LeaderboardItem from './LeaderboardItem';

const Leaderboard = () => {
    const items = useSelector(state => state.premium.premiumItems)
    
    return (
        <Fragment>
            <Header />
          
            <Card className={classes.list}>
            <ul>
            {items.map((key) => (

            <LeaderboardItem key={key.id} name={key.name} id={key.id}
            amount={key.totalExpenses}  />
            ))} 
            </ul>
            </Card> 
        </Fragment>
    )
};

export default Leaderboard;