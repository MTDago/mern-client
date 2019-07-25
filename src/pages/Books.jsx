import React, { Component } from 'react';
import Title from '../components/layout/Title';
import axios from 'axios';
import '../App.sass';
import { bookAPI } from '../API/init';

export default class Book extends Component {
    // current state of property objects which will be updated when this.state is used. In this case , an empty books array.
    state = {
        books: []
    };

    //When the Book output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
    //Inside, it calls the bookAPI which calls a GET request with Axios.
    componentDidMount = () => {
        axios.get(bookAPI).then(result => {
            this.setState({
                books: [...result.data]
            });
        });
    };

    //Transforms the components into DOM node that the
    // browser can understand and display to the screen.
    render() {
        return (
            <section className="container is-fluid is-mobile">
                <Title title="My Books" />
                <div className="card has-equal-height columns is-multiline">
                    {this.state.books.map(object => {
                        return (
                            <div
                                key={object._id}
                                className="card has-equal-height column is-half"
                            >
                                <div className="columns is-one-quarter equal-height">
                                    <div className="card-content is-flex is-horizontal-center columns is-one-quarter is-centered">
                                        <a
                                            href={
                                                '/books/' + object._id + '/show'
                                            }
                                        >
                                            <img
                                                src={object.imageURL}
                                                alt={
                                                    object.title +
                                                    ' Cover Photo'
                                                }
                                                height="455"
                                                width="249"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <a href={'/books/' + object._id + '/show'}>
                                    <h2 className="title is-4">
                                        {object.title}
                                    </h2>
                                </a>
                                <p>{object.blurb}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
