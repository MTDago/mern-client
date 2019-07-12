import React, { Component } from 'react'
import Title from './Title'

export default class Books extends Component {
    state = {
        blogs: []
    }
    render() {
        return (
            <section className="blogs">
                <Title title="My Books" />
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

