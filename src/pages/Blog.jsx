import React, { Component } from 'react';
import Title from '../components/layout/Title';
import axios from 'axios';
import { blogAPI } from '../API/init';

export default class Blog extends Component {
    state = {
        blogs: []
    };

    componentDidMount = () => {
        axios.get(blogAPI).then(result => {
            let resultArray = Array.from(result.data);
            this.setState({
                blogs: resultArray
            });
        });
    };

    render() {
        return (
            <section className="container is-fluid column is-mobile is-centered">
                <Title title="My Blog" />
                <div>
                    {this.state.blogs.map(object => {
                        return (
                            <div
                                key={object._id}
                                className="tile is-parent box"
                            >
                                <a href={'/blog/' + object._id + '/show'}>
                                    <h2 className="heading">{object.title}</h2>
                                </a>
                                <article className="section">
                                    {object.content}
                                </article>
                                {object.tags.map(tag => {
                                    return (
                                        <button className="button is-small is-rounded has-text-centered ">
                                            {tag}
                                        </button>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
