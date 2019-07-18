import React, { Component } from 'react';
import Title from '../../components/layout/Title';
import '../../App.sass';
import { bookAPI } from '../../API/init';
import axios from 'axios';

export default class NewBook extends Component {
    state = {
        id: this.props.match.params.id,
        title: 'THIS SHOULD BE A BOOK',
        cost: '',
        blurb: '',
        published: '',
        series: ''
    };

    UNSAFE_componentWillMount = () => {
        // Refactor the axios to use bookAPI + this.state.id
        axios
            .get(
                `https://mern-server-deployment.herokuapp.com/books/${
                    this.state.id
                }`
            )
            .then(result => {
                let { title, blurb, cost, published, series } = result.data;
                this.setState({
                    title: title,
                    blurb: blurb,
                    cost: cost,
                    series: series
                });
            });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { title, cost, blurb, published, series } = this.state;
        axios
            .put(
                `https://mern-server-deployment.herokuapp.com/books/${
                    this.state.id
                }`,
                {
                    title: title,
                    cost: cost,
                    blurb: blurb,
                    published: published,
                    series: series
                }
            )
            .then(console.log(this.state.id));
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    deleteBook = event => {
        event.preventDefault();
        axios
            .delete(
                `https://mern-server-deployment.herokuapp.com/books/${
                    this.state.id
                }`
            )
            .then(function(value) {
                console.log('THis should work');
                window.location.reload();
            });
    };

    render() {
        const { title, cost, blurb, published, series } = this.state;
        return (
            <div>
                <Title title="Edit Book:" />
                <form
                    className="columns is-mobile is-centered"
                    onSubmit={this.handleSubmit}
                >
                    <div className="column is-half is-narrow">
                        {/* TITLE */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="title"
                            placeholder="Enter the Title"
                            value={title}
                            onChange={this.handleChange}
                            required
                        />

                        <br />
                        <br />
                        <br />

                        {/* COST*/}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="cost"
                        >
                            Cost
                        </label>
                        <input
                            className="input is-rounded"
                            name="cost"
                            type="number"
                            value={cost}
                            onChange={this.handleChange}
                            required
                        />

                        <br />
                        <br />
                        <br />

                        {/* BLURB */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="blurb"
                        >
                            Description
                        </label>
                        <textarea
                            className="textarea"
                            type="text"
                            name="blurb"
                            placeholder="Enter the blurb"
                            value={blurb}
                            onChange={this.handleChange}
                            required
                        />

                        <br />
                        <br />
                        <br />

                        {/* PUBLISHED */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="published"
                        >
                            Date Published:
                        </label>
                        <input
                            className="input is-rounded"
                            type="date"
                            name="published"
                            value={published}
                            onChange={this.handleChange}
                            required
                        />

                        <br />
                        <br />
                        <br />

                        {/* SERIES */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="series"
                        >
                            What series is it part of:
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="series"
                            value={series}
                            onChange={this.handleChange}
                        />

                        <br />
                        <br />

                        <button className="button is-rounded" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <button className="button is-rounded" onClick={this.deleteBook}>
                    Delete Book
                </button>
            </div>
        );
    }
}
