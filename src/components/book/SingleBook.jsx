import React, { Component } from 'react';
import axios from 'axios';
import { bookAPI } from '../../API/init';
import '../../App.sass';
import StripeButton from '../stripe/StripeButton';

export default class SingleBook extends Component {
    // Construct the state and props
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: 'Book Title Placeholder',
            blurb: '',
            cost: '',
            published: '',
            series: '',
            imageURL: ''
        };
    }

    //When the SingleBook output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
    //Inside, it calls the API which calls a GET request with Axios.
    componentDidMount = () => {
        // Refactor the axios to use bookAPI + this.state.id
        axios.get(bookAPI + '/' + this.state.id).then(result => {
            let {
                title,
                blurb,
                cost,
                published,
                series,
                imageURL
            } = result.data;
            this.setState({
                title: title,
                blurb: blurb,
                cost: cost,
                published: published,
                series: series,
                imageURL
            });
        });
    };

    //Render transforms the components into DOM node that the
    // browser can understand and display to the screen.
    render() {
        return (
            <div className="columns is-fluid column is-mobile is-centered">
                <div className="column is-half">
                    <br />
                    <img
                        src={this.state.imageURL}
                        alt={this.state.title + ' Cover Image'}
                        height="283"
                        width="200"
                    />
                </div>
                <div className="column is-half">
                    <br />
                    <h1 className="title is-2">{this.state.title}</h1>
                    <h2 className="title is-4">${this.state.cost}</h2>
                    <p>
                        Published:{' '}
                        {new Date(this.state.published).getUTCFullYear()}
                    </p>
                    About the Book:
                    <article className="column is-full ">
                        {this.state.blurb}
                    </article>
                    {/* <a href={'/books/' + this.state.id + '/edit'}>
                        <button className="button is-rounded">Edit</button>
                    </a> */}
                    <a href={'/books/'}>
                        <button className="button is-rounded">Back</button>
                    </a>{' '}
                    <StripeButton
                        name={this.state.title}
                        description={this.state.blurb}
                        amount={this.state.cost}
                    />
                </div>
            </div>
        );
    }
}
