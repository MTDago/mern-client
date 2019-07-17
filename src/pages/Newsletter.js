import React, { Component } from 'react'
import Title from '../components/Title'

export default class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: ""
        };
      }
    
      render() {
        const { name, email } = this.state;
        return (
            <section className="blogs">
                <Title title="Newsletter" />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="name">Email</label>
                    <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
          </section>
        );
      }
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
      };
    }