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
            <section className="container is-fluid column is-mobile is-centered is-half">
                <Title title="My Books" />
                <div className="tile is-vertical is-8 is-parent">
                    {this.state.books.map(object => {
                        return (
                            <div key={object._id} className="tile is-child box">
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
