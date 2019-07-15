import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom'
import AboutMe from './components/AboutMe';
import Books from './components/Books'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
// import LoginForm from './components/LoginForm';
import ValidatedLoginForm from './components/ValidateLoginForm';
import SingleBook from './components/SingleBook';

function App() {
    return (
        <>
            <Navbar />
            <Route exact path="/aboutMe" component={AboutMe}/>
            <Route exact path="/books/" component={Books}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/newsletter" component={Newsletter}/>
            {/* <Route exact path ="/login" component={LoginForm} /> */}
            <Route exact path="/login" component={ValidatedLoginForm}/>
            <Route exact path="/books/:slug" component={SingleBook}/>
        </>
    );
}

export default App;
