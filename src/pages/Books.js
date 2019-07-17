import React, {Component} from 'react'
import Title from '../components/Title'
import axios from 'axios'
import '../App.sass'
const bookAPI = "https://mern-server-deployment.herokuapp.com/books"

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
                        <h2>{object.title}</h2>
                        <p>{object.blurb}</p>
                        </div>
                    })}
                </div>
            </section>
        )
    }
}

    // const Book = () => {}
    // if (books.length === 0) {
    //     return (
    //         <div className='empty-search'>
    //             <h3>Unfortunately nothing matched your search</h3>
    //         </div>
    //     )
    // }

        // <section className="blogs">
            // <Title title="My Books" />
            {/* <section className='bookslist'>
                <div className='bookslist-center'>
                    {books.map(item => {
                        return <Book key={item.id} book={item} />
                    })}
                </div>
            </section> */}
