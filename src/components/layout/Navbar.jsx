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
                        <h2 className=" title is-3 navbar-item has-text-light">
                            Jo Brimblecombe
                        </h2>
                    </Link>
                </div>
                <section className=" navbar-end ">
                    <p className="navbar-end navbar-item">
                        <Link to="/about" className="navbar-item">
                            About Me
                        </Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/books" className="navbar-item">
                            Books
                        </Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/blog" className="navbar-item">
                            Blog
                        </Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/newsletter" className="navbar-item">
                            Newsletter
                        </Link>
                    </p>
                        <Link to="/login" className="navbar-item">
                            Login
                        </Link>
                    <p>

                    </p>
                </section>
            </nav>
        );
    }
}
