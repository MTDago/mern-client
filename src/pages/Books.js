import React, {Component} from 'react'
import Title from '../components/Title'
import axios from 'axios'
import '../App.sass'
import {bookAPI} from '../API/init'


export default class Book extends Component {
    state ={
        books: []
    }
    
    componentDidMount = () => {
        axios.get(bookAPI).then(result => {
            this.setState({
                books: [...result.data]
            })
        })
    }
    render() {
        return (
            <section className="card">
                <Title title="My Books" />
                <div className='card-header'> 
                    {this.state.books.map(object => {
                        return <div>
                        <a href={"/book/" + object._id}><h2>{object.title}</h2></a>
                        <p>{object.blurb}</p>
                        </div>
                    })}
                </div>
            </section>
        )
    }
}


