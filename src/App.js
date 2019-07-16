import React from 'react';
import './App.sass'
import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import Books from './pages/Books'
import Blog from './pages/Blog'
import Newsletter from './components/Newsletter'
// import LoginForm from './components/LoginForm';
import ValidatedLoginForm from './components/ValidateLoginForm';
import SingleBook from './components/SingleBook';

function App() {
  return (
    <>
    <div className='navbar'>
        <h1 className="navbar-brand navbar-item">Jo Brimblecombe</h1>
        <div className="navbar-end ">
          <div className='navbar-item'>
          <a className='navbar-item navbar-link'><Route exact path="/blog" component={Blog}>Blog</Route></a>
          <a className='navbar-item navbar-link'><Route exact path="/books/" component={Books}>Books</Route></a>
          <a className='navbar-item navbar-link'><Route exact path="/newsletter" component={Newsletter}>Newsletter</Route></a>
          </div>
        </div>
      </div>
      <div className="buttons">
        <a className="button is-link">Purchase</a>
      </div>
      {/* <Route exact path ="/login" component={LoginForm} /> */}
      <Route exact path="/login" component={ValidatedLoginForm}/>
      <Route exact path="/books/:slug" component={SingleBook}/>
    </>
  );
}

export default App;
