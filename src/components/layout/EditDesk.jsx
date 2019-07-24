import React, { Component } from 'react';
import Title from '../../components/layout/Title';
import '../../App.sass';
import { deskAPI } from '../../API/init';
import axios from 'axios';

export default class NewBook extends Component {
    // Create the state
    constructor(props) {
        super(props);
        this.state = {
            reading: '',
            writing: '',
            WIP: '',
            links: []
        };
    }

    // Fill the state with the Blog from the Server. Inside, it calls the bookAPI which calls a Get request with Axios.
    UNSAFE_componentWillMount = () => {
        // Refactor the axios to use bookAPI + this.state.id
        axios.get(deskAPI).then(result => {
            let { reading, writing, WIP, links } = result.data[0];
            this.setState({
                reading: reading,
                writing: writing,
                WIP: WIP,
                links: links
            });
        });
    };

    // Updates based on user submitting form. Inside, it calls the bookAPI which calls a PUT request with Axios.
    handleSubmit = event => {
        // Prevent page refresh
        event.preventDefault();
        const { reading, writing, WIP, links } = this.state;
        axios
            .put(deskAPI + '/edit', {
                reading: reading,
                writing: writing,
                WIP: WIP,
                links: links
            })
            .then(function(value) {
                window.location.replace('/about');
            });
    };

    // Updates based on user input change.
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Render transforms the components into DOM node that the
    // browser can understand and display to the screen.
    render() {
        const { reading, writing, WIP, links } = this.state;
        return (
            <div>
                <Title title="What's on your Desk?" />
                <form
                    className="columns is-mobile is-centered"
                    onSubmit={this.handleSubmit}
                >
                    <div className="column is-half is-narrow">
                        {/* Reading */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="reading"
                        >
                            What I'm reading:
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="reading"
                            placeholder="Enter the reading"
                            value={reading}
                            onChange={this.handleChange}
                            required
                        />

                        <br />
                        <br />
                        <br />
                        {/* Writing*/}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="writing"
                        >
                            What i'm writing:
                        </label>
                        <input
                            className="input is-rounded"
                            name="writing"
                            type="text"
                            value={writing}
                            onChange={this.handleChange}
                            required
                        />

                        <br />
                        <br />
                        <br />

                        {/* WIP */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="WIP"
                        >
                            WIP
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="WIP"
                            placeholder="Enter the WIPs"
                            value={WIP}
                            onChange={this.handleChange}
                            required
                        />

                        <br />
                        <br />
                        <br />

                        {/* Links */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="links"
                        >
                            Cool Links:
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="links"
                            value={links}
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
