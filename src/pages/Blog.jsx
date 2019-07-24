import React, { Component } from 'react';
import Title from '../components/layout/Title';
import axios from 'axios';
import { blogAPI } from '../API/init';

export default class Blog extends Component {
    // current state of property objects which will be updated when this.state is used. In this case , an empty blog array.
    state = {
        blogs: []
    };

    //When the Blog output is inserted in the DOM, React calls the componentDidMount() lifecycle method. 
    //Inside, it calls the blogAPI which calls a GET request with Axios.
    componentDidMount = () => {
        axios.get(blogAPI).then(result => {
            let resultArray = Array.from(result.data);
            this.setState({
                blogs: resultArray
            });
        });
    };

    //Render transforms the components into DOM node that the 
    // browser can understand and display to the screen.
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
                                        <button
                                            key={object.tags.indexOf(tag)}
                                            className="button is-small is-rounded has-text-centered "
                                        >
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
