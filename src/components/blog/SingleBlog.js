import React, { Component } from 'react';
import axios from 'axios';
// import { blogAPI } from '../API/init'
import '../../App.sass';

export default class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: 'BLOG TEST',
            content: '',
            date: '',
            tags: []
        };
    }

    componentDidMount = () => {
        axios
            .get(
                `https://mern-server-deployment.herokuapp.com/blogs/${
                    this.state.id
                }`
            )
            .then(result => {
                let { title, content, tags, date } = result.data;
                this.setState({
                    title: title,
                    content: content,
                    date: date,
                    tags: tags
                });
            });
    };

    render() {
        return <div className="container is-fluid column is-mobile is-centered">
            <h1 className="title is-2">{this.state.title}</h1>
            <article className="section">{this.state.content}</article>
            <a href={"/books/" + this.state.id + "/edit"}><button className="button is-rounded">Edit</button></a>
        </div>
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
