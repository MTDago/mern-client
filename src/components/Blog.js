import React, { Component } from 'react'
import Title from './Title'

export default class Blog extends Component {
    state = {
        blogs: []
    }
    render() {
        return (
            <section className="blogs">
                <Title title="My Blog" />
                <div className='blogs-center'>
                    {this.state.blogs.map((item, index) => {
                        return <article key={index} className='blog'>
                            
                        </article>
                    })}
                </div>                
            </section>
        )
    }
}

