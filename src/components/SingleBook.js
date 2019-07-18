import React, { Component } from 'react'
import axios from 'axios'
// import { bookAPI } from '../API/init'
import '../App.sass'


export default class SingleBook extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: 'TEst',
            blurb: '',
            cost: '',
            published: '',
            series: ''
        }
    }
    

    componentDidMount = () => {
        // Refactor the axios to use bookAPI + this.state.id
        axios.get(`https://mern-server-deployment.herokuapp.com/books/${this.state.id}`).then(result => {
        let {title, blurb, cost, published, series} = result.data
        this.setState({
            title: title,
            blurb: blurb,
            cost: cost,
            published: published,
            series: series
        })
        })
    }

    render() {
        return <div>
            <button>{this.state.title}</button>
            description: 
            <p>{this.state.blurb}</p>
            <p> {this.API} </p>
            <a href={"/books/" + this.state.id + "/edit"}>Edit</a>
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