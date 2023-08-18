import classes from './Report.module.css';
import Header from '../Layout/Header';
import { Container, Button, Card } from 'react-bootstrap';
import { Fragment, useEffect, } from 'react';
import axios from 'axios';
import ReportItem from './ReportItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDownloadedData } from '../../store/premium-actions';
import { premiumActions } from '../../store/premium';
const Report = () => {
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const data = useSelector(state => state.premium.downloadedData)
    
    console.log(data);
    useEffect(() => {
       dispatch(fetchDownloadedData(token));
    },[dispatch])
    const downloadReport = async() => {
      
        try {

            const response = await axios.get('http://localhost:4000/user/download', { headers: {"Authorization" : token } })
            console.log(response)
            if(response.status === 200) {
                var a = document.createElement('a');
                a.href = response.data.fileURL;
                a.download = 'myexpense.csv';
                a.click();
                dispatch(premiumActions.addDownloadedItems(response.data));
            } else {
                throw new Error(response.data.message)
            }
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <Fragment>
        <Header />
        <Container className={classes.report} >
        <h2>Day to Day Expenses</h2>
        <Button onClick={downloadReport}>Download Report</Button>
        <Card className={classes.list}>
        <ul>
        {data && data.map((item) => (
           <ReportItem key={item.id} url={item.fileURL} />
                ))}
            
        </ul>
        </Card>
      </Container>
      
        </Fragment>
    )
};

export default Report;