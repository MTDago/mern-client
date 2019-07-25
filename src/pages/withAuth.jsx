import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false
            };
        }

        //When the output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
        componentDidMount() {
            fetch('http://localhost:5000/checkToken', {
                method: 'POST',
                body: JSON.stringify({ token: localStorage.getItem('token') }), // The AUTHORISATION relies on token to be transferred across pages. This parses the TOKEN through the body of the browser to be read elsewhere. This is an alternative to using cookies.
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.text()) // The expected response is a 200 or 'OK', it is not json,  it is just raw text and res.json() is not needed in order to parse it through the rest of the code
                .then(res => {
                    if (res === 'OK') {
                        this.setState({ loading: false }); // If the res is 200, we change the LOADING value to false and allow the page to be rendered
                    } else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ loading: false, redirect: true }); // If the user is not authorised, they are redirected to the login page by setting the REDIRECT value to true
                });
        }

        //Transforms the components into DOM node that the
        // browser can understand and display to the screen.
        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                // If the user is not authorised to access the requested page
                return <Redirect to="/login" />; // The login page will be displayed
            }
            return (
                <>
                    <ComponentToProtect {...this.props} />
                </>
            );
        }
    };
}
