import React, { Component } from 'react';
import Title from '../components/layout/Title';
import '../App.sass';
import { mailingListAPI } from '../API/init';
import axios from 'axios';

export default class Newsletter extends Component {
     // current state of property objects
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
    }

    // Updates based on user form input change.
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Updates based on user submitting form. Inside, it calls the mailingListAPI which calls a POST request with Axios.
    handleSubmit = event => {
        event.preventDefault();
        const { firstName, lastName, email } = this.state;
        axios.post(mailingListAPI, {
            firstName: firstName,
            lastName: lastName,
            email: email
        });
    };

    //Transforms the components into DOM node that the 
    // browser can understand and display to the screen.
    render() {
        const { firstName, lastName, email } = this.state;
        return (
            <div>
                <Title title="Newsletter" />
                <h2 className="subtitle is-5">
                    {' '}
                    Want to keep Updated? Join the mailing list to stay informed
                    on new books, blog posts and events:
                </h2>
                <form
                    className="columns is-mobile is-centered"
                    onSubmit={this.handleSubmit}
                >
                    <div className="column is-half is-narrow">
                        <br />
                        <br />
                        <br />
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="firstName"
                        >
                            First Name
                        </label>

                        <input
                            className="input is-rounded"
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <br />
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="lastName"
                        >
                            Last Name
                        </label>

                        <input
                            className="input is-rounded"
                            name="lastName"
                            type="text"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <br />
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="input is-rounded"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />

                        <button className="button is-rounded" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
