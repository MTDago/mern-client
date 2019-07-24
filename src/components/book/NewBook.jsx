import React, { Component } from 'react';
import Title from '../../components/layout/Title';
import '../../App.sass';
import { bookAPI } from '../../API/init';
import axios from 'axios';
import ImageUpload from './ImageUpload';

export default class NewBook extends Component {
    // Construct the state and props
    constructor(props) {
        super(props);
        this.getImage = this.getImage.bind(this);
        this.state = {
            title: '',
            cost: '',
            blurb: '',
            published: '',
            series: '',
            image:
                'http://res.cloudinary.com/yeetus/image/upload/v1563976098/placeholder-image_rsiizf.png'
        };
    }

    // Updates when user uploads an image
    getImage(image) {
        this.setState({
            image: image.url
        });
        let uploadButton = document.getElementById('UploadButton');
        uploadButton.innerHTML = 'Image Uploaded';
    }

    // Updates based on user submitting form. Inside, it calls the bookAPI which calls a POST request with Axios.
    handleSubmit = event => {
        // prevents page refresh
        event.preventDefault();
        const { title, cost, blurb, published, series, image } = this.state;
        axios
            .post(bookAPI, {
                title: title,
                cost: cost,
                blurb: blurb,
                published: published,
                series: series,
                imageURL: image
            })
            .then(function(value) {
                window.location.replace('/books');
            });
    };

    // Updates based on user form input change.
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //Render transforms the components into DOM node that the
    // browser can understand and display to the screen.
    render() {
        const { title, cost, blurb, published, series } = this.state;
        return (
            <div>
                <Title title="Add a book to sell." />

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
                            Add an Image:
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
                        />
                        required
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
                        <button
                            className="button is-rounded"
                            type="submit"
                            onClick={this.onClickHandler}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
