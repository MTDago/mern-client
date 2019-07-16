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
      <p className="navbar-item navbar-end">
        Modern CSS framework based on{' '}
        <a className='navbar-end navbar-divider' href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
          Flexbox
                  </a>
      </p>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Input" />
        </div>
      </div>
      </div>

      <div className="field">
        <p className="control">
          <span className="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div className="buttons">
        <a className="button is-primary">Primary</a>
        <a className="button is-link">Link</a>
      </div>
    </>
  );
}

export default App;
