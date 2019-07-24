import React from 'react';
import { Route } from 'react-router-dom';
import './App.sass';

// Layout and Pages
import Navbar from './components/layout/Navbar';
import AboutMe from './pages/AboutMe';
import Books from './pages/Books';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import Login from './pages/LoginForm';
import withAuth from './pages/withAuth';

// Auth
// import LoginForm from './components/pages/LoginForm'
// import ValidatedLoginForm from './pages/ValidateLoginForm';
import Secret from './components/secret';

// Book
import SingleBook from './components/book/SingleBook';
import NewBook from './components/book/NewBook';
import EditBook from './components/book/EditBook';

// Blog
import SingleBlog from './components/blog/SingleBlog';
import NewBlog from './components/blog/NewBlog';
import EditBlog from './components/blog/EditBlog';

// Stripe
// import stripeButton from './components/stripe/StripeButton';

function App() {
    return (
        <>
            <Navbar />
            {/* Pages */}
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/books/" component={Books} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/newsletter" component={Newsletter} />
            {/* Login */}
            {/* <Route exact path ="/login" component={LoginForm} /> */}
            {/* <Route exact path="/login" component={ValidatedLoginForm} /> */}
            {/* Books */}
            <Route exact path="/books/add" component={withAuth(NewBook)} />
            <Route exact path="/books/:id/show" component={SingleBook} />
            <Route exact path="/books/:id/edit" component={withAuth(EditBook)} />
            {/* Blog */}
            <Route exact path="/blog/add" component={withAuth(NewBlog)} />
            <Route exact path="/blog/:id/show" component={SingleBlog} />
            <Route exact path="/blog/:id/edit" component={withAuth(EditBlog)} />
            {/* Login 2 */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/secret" component={withAuth(Secret)} />
        </>
    );
}

export default App;
