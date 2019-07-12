import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom'
import AboutMe from './components/AboutMe';
import Books from './components/Books'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'

function App() {
    return (
        <>
        <Navbar />
        <Route exact path="/aboutMe" component={AboutMe}/>
        <Route exact path="/books/" component={Books}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/newsletter" component={Newsletter}/>
        </>
    );
}

export default App;
