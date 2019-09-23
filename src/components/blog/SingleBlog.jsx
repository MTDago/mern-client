import React, { Component } from 'react';
import axios from 'axios';
// import { blogAPI } from '../API/init'
import '../../App.sass';
import { Link } from 'react-router-dom'

export default class SingleBook extends Component {
    // Construct the state and props
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: 'BLOG TEST',
            content: '',
            date: '',
            tags: []
        };
    }

    //When the SingleBook output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
    //Inside, it calls the API which calls a GET request with Axios.
    componentDidMount = () => {
        axios
            .get(
                `https://mern-server-deployment.herokuapp.com/blogs/${
                    this.state.id
                }`
            )
            .then(result => {
                let { title, content, tags, date } = result.data;
                this.setState({
                    title: title,
                    content: content,
                    date: date,
                    tags: tags
                });
            });
    };

    //Render transforms the components into DOM node that the
    // browser can understand and display to the screen.
    render() {
        return (
            <div className="container is-fluid column is-mobile is-centered">
                <h1 className="title is-2">{this.state.title}</h1>
                <article className="section">{this.state.content}</article>
                {/* <a href={'/blog/' + this.state.id + '/edit'}>
                    <button className="button is-rounded">Edit</button>
                </a> */}
                <Link  to={'/blog'}>
                    <button className="button is-rounded">Back</button>
                </Link>
            </div>
        );
    }
}
