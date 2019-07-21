import React, { Component } from 'react';
import Title from '../../components/layout/Title';
import '../../App.sass';
// import { blogAPI } from '../API/init';
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
        axios
            .get(
                `https://mern-server-deployment.herokuapp.com/blogs/${
                    this.state.id
                }`
            )
            .then(result => {
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
        event.preventDefault();
        const { title, content, date, id } = this.state;
        const tags = this.state.tagArray;
        axios
            .put(
                `https://mern-server-deployment.herokuapp.com/blogs/${
                    this.state.id
                }`,
                {
                    title: title,
                    content: content,
                    tags: tags,
                    date: date
                }
            )
            .then(function(value) {
                console.log('THis should work');
                window.location.replace(`/blog/${id}/show`);
            });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleTags = event => {
        event.preventDefault();
        let newTag = document.getElementById('tags').value;
        this.setState({
            tagArray: [...this.state.tagArray, newTag]
        });
    };

    deleteTag = event => {
        this.setState(state => {
            const tagArray = state.tagArray.filter((item, j) => event !== j);
            return {
                tagArray
            };
        });
    };

    deleteBlog = event => {
        event.preventDefault();
        axios
            .delete(
                `https://mern-server-deployment.herokuapp.com/blogs/${
                    this.state.id
                }`
            )
            .then(function(value) {
                console.log('THis should work');
                window.location.reload();
            });
    };

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
                            onKeyPress={e => {
                                if (e.target.keyCode === 13) {
                                    e.preventDefault();
                                }
                            }}
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
                <button className="button is-rounded" onClick={this.deleteBlog}>
                    Delete Blog Post
                </button>
            </div>
        );
    }
}
