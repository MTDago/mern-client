import React from 'react';
<<<<<<< HEAD
import './App.css';
=======
import logo from './logo.svg';
>>>>>>> e393fd48ba51f33d7af187e8a5154deab28bf840
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom'
import AboutMe from './components/AboutMe';
import Books from './components/Books'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
// import LoginForm from './components/LoginForm';
import ValidatedLoginForm from './components/ValidateLoginForm';
import SingleBook from './components/SingleBook';
import './App.css';

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
