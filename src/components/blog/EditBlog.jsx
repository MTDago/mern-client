import React, { Component } from 'react';
import Title from '../../components/layout/Title';
import '../../App.sass';
import { blogAPI } from '../../API/init';
import axios from 'axios';

export default class NewBook extends Component {
    // Create the state
    state = {
        id: this.props.match.params.id,
        title: 'THIS SHOULD BE A BLOG',
        content: '',
        date: '',
        tagArray: []
    };

    // Fill the state with the Blog from the Server
    UNSAFE_componentWillMount = () => {
        axios.get(blogAPI + '/' + this.state.id).then(result => {
            let { title, content, date, tags } = result.data;
            this.setState({
                title: title,
                content: content,
                date: date,
                tagArray: [...tags]
            });
        });
    };

    handleSubmit = event => {
        // Prevent page refresh
        event.preventDefault();

        // Denature the state into the respective values
        const { title, content, date, id } = this.state;
        const tags = this.state.tagArray;

        axios
            .put(blogAPI + '/' + this.state.id, {
                title: title,
                content: content,
                tags: tags,
                date: date
            })
            .then(function(value) {
                window.location.replace(`/blog/${id}/show`);
            });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Tags
    handleTags = event => {
        event.preventDefault();
        let newTag = document.getElementById('tags').value;
        if (this.state.tagArray.includes(newTag) !== true) {
            this.setState({
                tagArray: [...this.state.tagArray, newTag]
            });
        }
        document.getElementById('tags').value = null;
    };

    // If enter is pressed on the tag form
    onEnter = event => {
        if (event.which === 13 /* Enter */) {
            this.handleTags(event);
        }
    };

    deleteTag = event => {
        this.setState(state => {
            const tagArray = state.tagArray.filter((item, j) => event !== j);
            return {
                tagArray
            };
        });
    };

    // Delete Blog
    deleteBlog = event => {
        event.preventDefault();
        axios.delete(blogAPI + '/' + this.state.id).then(function(value) {
            console.log('THis should work');
            window.location.replace('/about');
        });
    };

    render() {
        const { title, content } = this.state;
        return (
            <div>
                <Title title="Edit Blog Post:" />
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
                            <a
                                key={this.state.tagArray.indexOf(tag)}
                                className="button is-danger is-outlined"
                                onClick={() => this.deleteTag(index)}
                            >
                                <span>{tag + '  X'}</span>
                                <span className="icon is-small">
                                    <i className="fas fa-times" />
                                </span>
                            </a>
                        ))}

                        <br />
                        <br />
                        <br />

                        <button
                            className="button is-rounded"
                            type="submit"
                            href="/"
                        >
                            Update
                        </button>
                    </div>
                </form>
                <button
                    className="button is-rounded is-danger is-centred"
                    onClick={this.deleteBlog}
                >
                    Delete Blog Post
                </button>
            </div>
        );
    }
}
