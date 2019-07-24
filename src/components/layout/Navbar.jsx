import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.sass';

export default class Navbar extends Component {
    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

     //Render transforms the components into DOM node that the 
    // browser can understand and display to the screen. Navbar is displayed on every page and links to all other pages.
    render() {
        return (
            <nav className="navbar is-dark is-fluid navbar-menu is-active">
                <div className="navbar-brand navbar-item">
                    <Link to="/about">
                        <h2 className=" title is-3 navbar-item">Jo Brimblecombe</h2>
                    </Link>
                </div>
                <section className=" navbar-end ">
                    <p className="navbar-end navbar-item">
                        <Link to="/about">About Me</Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/books">Books</Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/blog">Blog</Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/newsletter">Newsletter</Link>
                    </p>
                </section>
            </nav>
        );
    }
}
