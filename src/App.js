import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Books from './pages/Books';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
// import LoginForm from './components/LoginForm';
import ValidatedLoginForm from './pages/ValidateLoginForm';
import SingleBook from './components/SingleBook';
import SingleBlog from './components/SingleBlog';
import './App.sass';

import NewBook from './components/NewBook';
import NewBlog from './components/NewBlog';
import EditBook from './components/EditBook';
import EditBlog from './components/EditBlog';
import CheckoutForm from './components/CheckoutForm'
import stripeButton from './components/StripeButton';

function App() {
    return (
        <>
            <Navbar />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/books/" component={Books} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/newsletter" component={Newsletter} />
            {/* <Route exact path ="/login" component={LoginForm} /> */}
            <Route exact path="/login" component={ValidatedLoginForm} />
            <Route path="/books/:id" component={SingleBook} />
            <Route path="/books/add" component={NewBook} />
            <Route path="/books/:id/edit" component={EditBook} />
            <Route path="/blog/:id" component={SingleBlog} />
            <Route path="/blog/add" component={NewBlog} />
            <Route path="/blog/:id/edit" component={EditBlog} />
            {/* <Route path="/books/:id" component={CheckoutForm} /> */}
            <Route path="/books/:id" component={stripeButton} />           
        </>
    );
}

export default App;
