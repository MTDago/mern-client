import React, { Component } from 'react'

export default class Login extends Component {
  // current state of property objects
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
    }
  }

  // Updates based on user form input change.
  handleInputChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  // Updates based on user submitting form. Inside, it calls the API which calls a POST request with Axios and catches any errors.
  onSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault()
    fetch('http://localhost:5000/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          const error = new Error(res.error)
          throw error
        }
      })
    .then(res => {
        localStorage.setItem('token', res.token)
        this.props.history.push('/')
    })
    .catch(err => {
      console.error(err)
      alert('Error logging in please try again')
    })
  }

  //Transforms the components into DOM node that the 
  // browser can understand and display to the screen.
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input type="submit" value="Submit"/>
      </form>
    )
  }
}