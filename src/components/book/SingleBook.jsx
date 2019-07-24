import React, { Component } from 'react';
import axios from 'axios';
import { bookAPI } from '../../API/init';
import '../../App.sass';
import StripeButton from '../stripe/StripeButton';

export default class SingleBook extends Component {
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
                    About the Book:
                    <article className="section">{this.state.blurb}</article>
                    <a href={'/books/' + this.state.id + '/edit'}>
                        <button className="button is-rounded">Edit</button>
                    </a>
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
// const { getBook } = this.context
//     const book = getBook(this.state.slug)
//     if (!book) {
//         return <div className='error'>
//             <h3>No such book could be found...</h3>
//         </div>
//     }
//     const {
//         title,
//         cost,
//         blurb,
//         published,
//         images
//     } = book

//     return (
//         <div>
//              <section className='single-book'>
//                 <div className='single-book-images'>
//                     {images.map((item, index) => {
//                         return <img key={index} src={item} alt={title} />
//                     })}
//                 </div>
//                 <div className='single-book-info'>
//                     <article className='description'>
//                         <h1>{title}</h1>
//                         <p>{blurb}</p>
//                     </article>
//                     <article className='info'>
//                         <h3>Info</h3>
//                         <h6>Price : ${cost}</h6>
//                         <h6>Date Published : ${published}</h6>
//                     </article>
//                 </div>
//             </section>
//         </div>
//     )
// }
