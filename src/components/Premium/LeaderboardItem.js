import classes from './Leaderboard.module.css';
import LeaderboardDetails from './LeaderboardDetails';

const LeaderboardItem = (props) => {
    console.log(props);
    return (
        <li>
           <LeaderboardDetails id={props.id} name={props.name} amount={props.amount} /> 
        </li>
    )
};

export default LeaderboardItem;