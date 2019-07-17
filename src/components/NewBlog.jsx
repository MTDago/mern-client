import React, { Component } from 'react';
import Title from '../components/Title';
import '../App.sass';
import { blogAPI } from '../API/init';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

export default class NewBook extends Component {
   constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            tags: '',
            tagArray: []
        };
    }



    handleSubmit = event => {
        event.preventDefault()
        const { title, content } = this.state;
        const tags = this.tagArray
        axios.post(blogAPI, {
            title: title,
            content: content,
            tags: tags,
            date: Date.now
        }).then(
            <Redirect to="/aboutMe" />
        )
        console.log('Something happened')
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleTags = event => {
        event.preventDefault()
        let newTag = document.getElementById("tags").value


        this.setState({
            tagArray: [...this.state.tagArray, newTag]
        })


        console.log(newTag)
        console.log(this.state.tagArray)
    }

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
                            {this.state.tagArray.map(tag => 
                            <p key={this.state.tagArray.indexOf(tag)}>{tag}</p>)}
                            
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
                            />
                            <button className="button is-rounded" type="button" id="tagbutton" onClick={this.handleTags}>
                            Add Tag
                            </button>

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
