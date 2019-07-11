import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom'
import AboutMe from './components/AboutMe';

function App() {
    return (
        <>
        <Navbar />
        <Route exact path="/aboutMe" component={AboutMe}/>
        </>
    );
}

export default App;
