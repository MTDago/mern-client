import React, { Component } from 'react';
import Title from '../components/layout/Title';
import axios from 'axios';
import '../App.sass';
import { bookAPI } from '../API/init';

export default class Book extends Component {
    state = {
        books: []
    };

    componentDidMount = () => {
        axios.get(bookAPI).then(result => {
            this.setState({
                books: [...result.data]
            });
        });
    };
    render() {
        return (
            <section className="container is-fluid column is-mobile is-centered is-half">
                <Title title="My Books" />
                <div className="tile is-vertical is-8 is-parent">
                    {this.state.books.map(object => {
                        return (
                            <div key={object._id} className="tile is-child box">
                                <div className="columns is-one-quarter equal-height">
                                    <div className="card-content is-flex is-horizontal-center">
                                        <img
                                            src={object.imageURL}
                                            alt={object.title + ' Cover Photo'}
                                            height="455"
                                            width="249"
                                        />
                                    </div>
                                </div>
                                <a href={'/books/' + object._id + '/show'}>
                                    <h2 className="heading">{object.title}</h2>
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
