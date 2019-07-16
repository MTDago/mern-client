import React, { Component } from 'react'
import Title from './Title'
import axios from 'axios'

const blogAPI = "https://mern-server-deployment.herokuapp.com/blogs"

export default class Blog extends Component {
    state = {
        blogs: []
    }

    componentDidMount = () => {
        axios.get(blogAPI).then(result => {
            let resultArray = Array.from(result.data)
            this.setState({
                blogs: resultArray
            })
        })
    }

    render() {
        return (
            <section className="blogs">
                <Title title="My Blog" />
                <div className='blogs-center'>
                    {this.state.blogs.map(object => {
                        return <article key={object._id} className='blog'>
                            <h2>{object.title}</h2>
                            <p>{object.content}</p>
                            {object.tags.map(tag => {
                                return <p>{tag}</p>
                            })}
                        </article>
                    })}
                </div>                
            </section>
        )
    }
}

