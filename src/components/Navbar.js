import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    
    render() {
        return <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <h2>Jo Brimblecombe</h2>   
                    </Link>
                    {/* <button type="button" className="nav-btn" onClick={this.handleToggle}> */}
                        {/* <FaAlignRight className="nav-icon"/> */}
                    {/* </button> */}
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>    
                        <Link to="/aboutMe">About Me</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/newsletter">Newsletter</Link>
                    </li>
                </ul>
            </div>
        </nav>
    }
}
