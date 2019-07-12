import React, { Component } from 'react'
import Title from './Title'

export default class Newsletter extends Component {
   
    render() {
        return (
            <section className="blogs">
                <Title title="Newsletter" />
                <form>
                    <h3>Enter your details below</h3>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>                                         
            </section>            
        )
    }
}