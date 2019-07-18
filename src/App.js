import React from 'react';
import Navbar from './components/Navbar';
import { Route} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Books from './pages/Books';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
// import LoginForm from './components/LoginForm';
import ValidatedLoginForm from './pages/ValidateLoginForm';
import SingleBook from './components/SingleBook';
import SingleBlog from './components/SingleBlog'
import './App.sass';
import NewBook from './components/NewBook'
import NewBlog from './components/NewBlog'
import CheckoutForm from './components/CheckoutForm'

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
            <Route path="/blog/:id" component={SingleBlog} />
            <Route path="/books/add" component={NewBook} />
            <Route path="/blog/add" component={NewBlog} />  
            <Route path="/books/:id" component={CheckoutForm} />           
        </>
    );
}

export default App;
