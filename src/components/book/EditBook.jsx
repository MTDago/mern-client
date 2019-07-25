import React, { Component } from 'react';
import Title from '../../components/layout/Title';
import '../../App.sass';
import { bookAPI } from '../../API/init';
import axios from 'axios';
import ImageUpload from './ImageUpload';

export default class NewBook extends Component {
    // Create the state
    constructor(props) {
        super(props);
        this.getImage = this.getImage.bind(this);
        this.state = {
            id: this.props.match.params.id,
            title: 'THIS SHOULD BE A BOOK',
            cost: '',
            blurb: '',
            published: '',
            series: '',
            image: '',
            ISBN: ''
        };

        axios.get(bookAPI + '/' + this.state.id).then(result => {
            let {
                title,
                blurb,
                cost,
                published,
                series,
                image,
                ISBN
            } = result.data;
            this.setState({
                title: title,
                blurb: blurb,
                cost: cost,
                published: published,
                series: series,
                imageURL: image,
                ISBN: ISBN
            });
        });
    }

    // Updates when user uploads an image
    getImage(image) {
        this.setState({
            image: image.url
        });
        let uploadButton = document.getElementById('UploadButton');
        uploadButton.innerHTML = 'Image Changed';
    }

    // Updates based on user submitting form. Inside, it calls the bookAPI which calls a PUT request with Axios.
    handleSubmit = event => {
        // Prevent page refresh
        event.preventDefault();
        const {
            title,
            cost,
            blurb,
            published,
            series,
            image,
            ISBN
        } = this.state;
        axios
            .put(bookAPI + '/' + this.state.id, {
                title: title,
                cost: cost,
                blurb: blurb,
                published: published,
                series: series,
                imageURL: image,
                ISBN: ISBN
            })
            .then(function(value) {
                window.location.replace('/books');
            });
    };

    // Updates based on user input change.
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Deletes the book
    deleteBook = event => {
        // Prevent page refresh
        event.preventDefault();
        const response = window.confirm(
            'Are you sure you want to delete this book?'
        );
        if (response === true) {
            axios.delete(bookAPI + '/' + this.state.id).then(function(value) {
                window.location.replace('/about');
            });
        }
    };

    // Render transforms the components into DOM node that the
    // browser can understand and display to the screen.
    render() {
        const { title, cost, blurb, published, series, ISBN } = this.state;
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
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="image"
                        >
                            Change Cover Image:
                        </label>
                        <ImageUpload onImageUpload={this.getImage} />
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
                            type="month"
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
                        {/* SERIES */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="series"
                        >
                            ISBN:
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="ISBN"
                            value={ISBN}
                            onChange={this.handleChange}
                        />

                        <br />
                        <br />
                        <button className="button is-rounded" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="columns is-mobile is-centered">
                    <button
                        className="button is-rounded is-danger"
                        onClick={this.deleteBook}
                    >
                        Delete Book
                    </button>
                </div>
            </div>
        );
    }
}
