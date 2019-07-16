import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.sass';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    
    render() {
        return <div className="navbar-menu">
                <div>
                    <Link to="/">
                        <h2 className='navbar-item navbar-brand'>Jo Brimblecombe</h2>   
                    </Link>
                </div>
                <>
                    <a>    
                        <Link className='navbar-end navbar-item' to="/aboutMe">About Me</Link>
                    </a>
                    <a>
                        <Link className='navbar-end navbar-item' to="/books">Books</Link>
                    </a>
                    <a>
                        <Link className='navbar-end navbar-item' to="/blog">Blog</Link>
                    </a>
                    <a>
                        <Link className='navbar-end navbar-item' to="/newsletter">Newsletter</Link>
                    </a>
                </>
        </div>
    }
}
