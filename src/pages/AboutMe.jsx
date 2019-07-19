import React, { Component } from 'react';
import Title from '../components/layout/Title';
import '../App.sass';
import axios from 'axios';
import { blogAPI } from '../API/init';

export default class AboutMe extends Component {
    state = {
        blogTitle: '',
        blogContent: ''
    };

    componentDidMount = () => {
        axios.get(blogAPI).then(result => {
            const allBlogs = [...result.data];
            const blogToLoad = allBlogs[allBlogs.length - 1];
            this.setState({
                blogTitle: blogToLoad.title,
                blogContent: blogToLoad.content
            });
        });
    };

    render() {
        return (
            <div className="container is-fluid columns is-mobile is-multiline">
                <article className="column is-half article">
                    <Title title="About Me" />
                    <p className="section">
                        Umami consequat aute nulla ut quinoa hella humblebrag
                        cold-pressed cloud bread. Taiyaki synth sustainable,
                        prism mixtape mustache raclette +1 distillery taxidermy
                        lumbersexual. Semiotics hashtag mixtape minim chambray
                        hella blue bottle man bun listicle messenger bag mollit
                        culpa taxidermy scenester ethical. Selfies keffiyeh
                        knausgaard tilde pabst listicle artisan proident salvia
                        deep v. Oh. You need a little dummy text for your
                        mockup? How quaint. I bet you’re still using Bootstrap
                        too…
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
