import React, { Component } from 'react'
import Title from '../components/Title'
import '../App.sass'

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
            <div>
                <Title title="Newsletter" />
            <form className='columns is-mobile is-centered' onSubmit={this.handleSubmit}>
              <div className='column is-half is-narrow'>
              <br/>
              <br/>
              <br/>
                    <label className='label has-text-centered is-uppercase' htmlFor="name">Name</label>
                <input
                  className='input is-rounded'
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={this.handleChange}
                />
                <br/>
                <br/>
                <br/>                
                    <label className='label has-text-centered is-uppercase' htmlFor="name">Email</label>
                <input
                  className='input is-rounded'
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                    onChange={this.handleChange}
                />
                <br/>
                <br/>

                <button className='button is-rounded' type="submit">Submit</button>
                </div>
                </form>
          </div>
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