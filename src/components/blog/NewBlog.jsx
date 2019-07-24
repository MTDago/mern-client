import React, { Component } from 'react';
import Title from '../../components/layout/Title';
import '../../App.sass';
import { blogAPI } from '../../API/init';
import axios from 'axios';

export default class NewBook extends Component {
    // Construct the state and props
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            tagArray: []
        };
    }

    // Updates based on user submitting form. Inside, it calls the blogAPI which calls a POST request with Axios.
    handleSubmit = event => {
        // Prevent page refresh
        event.preventDefault();
        const { title, content } = this.state;
        const tags = this.state.tagArray;
        axios
            .post(blogAPI, {
                title: title,
                content: content,
                tags: tags,
                date: Date.now
            })
            .then(function(value) {
                window.location.replace('/blog');
            });
    };

    // Updates based on user form input change.
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //Tags
    handleTags = event => {
        // Prevent page refresh
        event.preventDefault();
        let newTag = document.getElementById('tags').value;
        if (this.state.tagArray.includes(newTag) !== true) {
            this.setState({
                tagArray: [...this.state.tagArray, newTag]
            });
        }
        document.getElementById('tags').value = null;
    };

    // if enter is pressed on the tag form
    onEnter = event => {
        if (event.which === 13 /* Enter */) {
            this.handleTags(event);
        }
    };

    // deletes the tag
    deleteTag = event => {
        this.setState(state => {
            const tagArray = state.tagArray.filter((item, j) => event !== j);
            return {
                tagArray
            };
        });
    };

    //Render transforms the components into DOM node that the
    // browser can understand and display to the screen.
    render() {
        const { title, content } = this.state;
        return (
            <div>
                <Title title="New Blog Post:" />
                <form
                    className="columns is-mobile is-centered"
                    onSubmit={this.handleSubmit}
                >
                    <div className="colum is-half is-narrow">
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

                        {/* Content*/}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="content"
                        >
                            Content:
                        </label>
                        <textarea
                            className="textarea"
                            rows="10"
                            name="content"
                            type="text"
                            value={content}
                            onChange={this.handleChange}
                            required
                        />

                        <br />
                        <br />
                        <br />

                        {/* Tags */}

                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="tags"
                        >
                            Tags
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="tags"
                            placeholder="Enter a tag"
                            id="tags"
                            onKeyPress={this.onEnter}
                        />
                        <button
                            className="button is-rounded"
                            type="button"
                            id="tagbutton"
                            onClick={this.handleTags}
                        >
                            Add Tag
                        </button>

                        {this.state.tagArray.map((tag, index) => (
                            <button
                                key={this.state.tagArray.indexOf(tag)}
                                className="button is-danger is-outlined"
                                onClick={() => this.deleteTag(index)}
                            >
                                <span>{tag + '  X'}</span>
                                <span className="icon is-small">
                                    <i className="fas fa-times" />
                                </span>
                            </button>
                        ))}

                        <br />
                        <br />
                        <br />

                        <button
                            className="button is-rounded"
                            type="submit"
                            href="/"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
