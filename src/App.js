import React from 'react';
// import HomePage from './folder/home-page';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './folder/NavBar';
import DashboardScreen from './folder/dashboard';
import StatisticsScreen from './folder/statistics';
import LoginScreen from './folder/login-page';
import WelcomeScreen from './folder/home-page';

function App() {
  return (
    <Router>
      <>
      <Navbar title='Add your title' homeText='DashBoard' statistics='Statistics'/>
      <Routes>
        <Route exact path='/dashboard' element={<DashboardScreen/>}/>
        <Route exact path='/home' element={<WelcomeScreen/>}/>
        <Route exact path='/login' element={<LoginScreen/>}/>
        <Route exact path='/statistics' element={<StatisticsScreen/>}/>
      </Routes>
      </>
    </Router>
  );
}

export default App;
