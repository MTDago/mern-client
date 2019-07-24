import React, { Component } from 'react';
import Title from '../components/layout/Title';
import '../App.sass';
import axios from 'axios';
import { blogAPI } from '../API/init';

export default class AboutMe extends Component {
    // current state of property objects which will be updated when this.state is used 
    state = {
        blogTitle: '',
        blogContent: ''
    };

    //When the AboutMe output is inserted in the DOM, React calls the componentDidMount() lifecycle method. 
    //Inside, it calls the blogAPI which calls a GET request with Axios.
    componentDidMount = () => {
        axios.get(blogAPI).then(result => {
            const allBlogs = [...result.data];
            if (allBlogs.length > 0) {
                const blogToLoad = allBlogs[allBlogs.length - 1];
                this.setState({
                    blogTitle: blogToLoad.title,
                    blogContent: blogToLoad.content
                });
            } else {
                console.log('No Blog Posts!');
            }
        });
    };

    //Render transforms the components into DOM node that the 
    // browser can understand and display to the screen.
    render() {
        return (
            <div className="container is-fluid columns is-mobile is-multiline">
                <article className="column is-half article">
                    <Title title="About Me" />
                    <p className="section">
                        Jo Brimblecombe is an aspiring time traveller who has
                        yet to make the leap from theory to practice. It’s not
                        for want of trying. As part of her Masters Degree in
                        Philosophy, she studied the ‘Philosophy of Time Travel’.
                        Her grades were definitely good enough to warrant an
                        attempt at the practical side. Her knowledge of physics,
                        however, is woefully inadequate. Her practical
                        engineering skills also leave a lot to be desired.
                        Having said that, she does have a good grasp of the
                        theory, so she is writing time travel fiction. She
                        reasons that if the books are entertaining enough,
                        future beings might travel back in time and sneak her on
                        a time- travelling adventure far, far beyond her mortal
                        time-line.
                        <br />
                        <br />
                        “Hope springs eternal” and “Closed timelike curves be
                        damned” are two of her favourite sayings.
                    </p>
                </article>
                <article className="column is-half">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Title title="What's on my Desk?" />
                    <p className="title is-5">{this.state.blogTitle}</p>
                    <p className="section has-text-left subtitle is-6">
                        {this.state.blogContent}
                    </p>
                </article>
            </div>
        );
    }
}
