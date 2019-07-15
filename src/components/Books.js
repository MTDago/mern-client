import React from 'react'
import Title from './Title'

export default function BookList({ books }) {
    const Book = () => {}
    // if (books.length === 0) {
    //     return (
    //         <div className='empty-search'>
    //             <h3>Unfortunately nothing matched your search</h3>
    //         </div>
    //     )
    // }
    return (
        <section className="blogs">
            <Title title="My Books" />
            {/* <section className='bookslist'>
                <div className='bookslist-center'>
                    {books.map(item => {
                        return <Book key={item.id} book={item} />
                    })}
                </div>
            </section> */}
        </section>
    )
}

