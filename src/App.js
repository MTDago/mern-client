import React from 'react';
import { Route } from 'react-router-dom';
import './App.sass';

// Layout and Pages
import Navbar from './components/layout/Navbar';
import AboutMe from './pages/AboutMe';
import Books from './pages/Books';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
// import LoginForm from './components/pages/LoginForm';
import ValidatedLoginForm from './pages/ValidateLoginForm';

// Book
import SingleBook from './components/book/SingleBook';
import NewBook from './components/book/NewBook';
import EditBook from './components/book/EditBook';

// Blog
import SingleBlog from './components/blog/SingleBlog';
import NewBlog from './components/blog/NewBlog';
import EditBlog from './components/blog/EditBlog';

// Stripe
import CheckoutForm from './components/stripe/CheckoutForm'
import stripeButton from './components/stripe/StripeButton';
import ImageUpload from './components/book/ImageUpload';

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
            <Route path="/books/add" component={ImageUpload} />
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
