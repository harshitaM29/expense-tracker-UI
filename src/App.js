import React from 'react';
import LoginPage from './pages/LoginPage';
import { lazy,Suspense } from 'react';
import SignUpPage from './pages/SignUpPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPremiumLeaderboardData } from './store/premium-actions';

const ForgetPassword = lazy(() => import('./components/ForgetPassword/ForgetPassword'));
const Leaderboard = lazy(() => import('./components/Premium/Leaderboard'));
const Report = lazy(() => import('./components/Report/Report'));
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const renderLoader = () => <p>Loading</p>;
  useEffect(() => {
    const token = localStorage.getItem('token');

   if(isLoggedIn) {
    setTimeout(() => {
      dispatch(fetchPremiumLeaderboardData(token))
    },1000)
    
   }
   
  },[dispatch,isLoggedIn]);
  


 


  return (
   <Switch>
    <Route path='/' exact>
      <LoginPage />
    </Route>
    <Route path = '/signup'>
      <SignUpPage />
    </Route>
    <Route path = '/home' >
      <HomePage />
    </Route>
    <Route path = '/leaderboard'>
    <Suspense fallback={renderLoader()}>
     <Leaderboard />
      </Suspense>
    </Route>
    <Route path='/forget'>
      <Suspense fallback={renderLoader()}>
      <ForgetPassword />
      </Suspense>
      
    </Route>
    <Route path='/report'>
    <Suspense fallback={renderLoader()}>
      <Report />
      </Suspense>
    </Route>
   
   </Switch>
  );
}

export default App;
