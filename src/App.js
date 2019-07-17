import React from 'react';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import Books from './pages/Books'
import Blog from './pages/Blog'
import Newsletter from './pages/Newsletter'
// import LoginForm from './components/LoginForm';
import ValidatedLoginForm from './pages/ValidateLoginForm';
import SingleBook from './components/SingleBook';
import './App.sass';

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
            <Route path="/:id" component={SingleBook}/>
        </>
    );
}

export default App;
