import React, { Component } from 'react';
import Title from '../components/layout/Title';
import axios from 'axios';
import { blogAPI } from '../API/init';
import { Link } from 'react-router-dom'

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
                <br />
                <div>
                    {this.state.blogs.reverse().map(object => {
                        return (
                            <div key={object._id} className=" is-parent box">
                                <div className=" is-child ">
                                    <Link to={'/blog/' + object._id + '/show'}>
                                        <h2 className="title is-3">
                                            {object.title}
                                        </h2>
                                    </Link>
                                    <p className="is-pulled-right">
                                        Published on
                                        {' ' +
                                            new Date(
                                                object.date
                                            ).toDateString()}
                                    </p>
                                </div>
                                <article className="section">
                                    {object.content}
                                </article>
                                <br />
                                <div>
                                    {object.tags.map(tag => {
                                        return (
                                            <button
                                                key={object.tags.indexOf(tag)}
                                                className="tag is-medium is-rounded has-text-centered "
                                            >
                                                {tag}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
