import React, { Component } from 'react';
import Title from '../components/Title';
import '../App.sass';
import { blogAPI } from '../API/init';
import axios from 'axios';

export default class NewBook extends Component {
   constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            tags: ''
        };
        let tagArray = []
    }

    handleSubmit = event => {
        event.preventDefault()
        const { title, content} = this.state;
        const tags = this.tagArray
        axios.post(blogAPI, {
            title: title,
            content: content,
            tags: tags,
            date: Date.now
        });
        console.log('Something happened')
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const {title, content, tags} = this.state
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
                        />

                        <br/><br/><br/>

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
                        ></textarea>

                        <br/><br/><br/>

                        {/* Tags */}
                        <form action="">
                            <p>{this.tagArray}</p>
                            
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
                                value={tags}
                            />
                        </form>

                        <br/><br/><br/>
                    
                        <button className="button is-rounded" type="submit">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
