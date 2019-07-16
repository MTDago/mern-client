import React, { Component } from 'react'

export default class SingleBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            // defaultBcg
        }
    }
    render() {
        const { getBook } = this.context 
        const book = getBook(this.state.slug)
        if (!book) {
            return <div className='error'>
                <h3>No such book could be found...</h3>
            </div>
        }
        const {
            title,
            cost,
            blurb,
            published,
            images
        } = book
        return (
            <div>
                 <section className='single-book'>
                    <div className='single-book-images'>
                        {images.map((item, index) => {
                            return <img key={index} src={item} alt={title} />
                        })}
                    </div>
                    <div className='single-book-info'>
                        <article className='description'>
                            <h1>{title}</h1>
                            <p>{blurb}</p>
                        </article>
                        <article className='info'>
                            <h3>Info</h3>
                            <h6>Price : ${cost}</h6>
                            <h6>Date Published : ${published}</h6>                                                       
                        </article>
                    </div>
                </section>
            </div>
        )
    }
}
