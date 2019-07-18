import React, { Component } from 'react';
import Title from '../components/Title';
import '../App.sass';
import { blogAPI } from '../API/init';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            tagArray: []
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const { title, content } = this.state;
        const tags = this.state.tagArray;
        axios.post(blogAPI, {
            title: title,
            content: content,
            tags: tags,
            date: Date.now
        }).then(
                  <Redirect
            to={{
              pathname: "/",
            }}
        />)
        // THIS IS WHERE YOU NEED TO REDIRECT
        console.log('Something happened');
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
                            onKeyPress={e => {
                                e.target.keyCode === 13 && e.preventDefault();
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
                                class="button is-danger is-outlined"
                                onClick={() => this.deleteTag(index)}
                            >
                                <span>{tag + '  X'}</span>
                                <span class="icon is-small">
                                    <i class="fas fa-times" />
                                </span>
                            </a>
                        ))}

                        <br />
                        <br />
                        <br />

                        <button className="button is-rounded" type="submit">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
