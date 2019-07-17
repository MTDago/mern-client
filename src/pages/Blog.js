import React, { Component } from 'react'
import Title from '../components/Title'
import axios from 'axios'
import {blogAPI} from '../API/init'

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
            <section className="columns">
                <Title title="My Blog" />
                <div className='blogs-center'>
                    {this.state.blogs.map(object => {
                        return <article key={object._id} className='tile box'>
                            <h2 className='heading'>{object.title}</h2>
                            <section className='section gap-4'>{object.content}</section>
                            {object.tags.map(tag => {
                                return <p className=''><br/>{tag}</p>
                            })}
                        </article>
                    })}
                </div>                
            </section>
        )
    }
}

