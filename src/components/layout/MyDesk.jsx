import React, { Component } from 'react';

class MyDesk extends Component {
    render() {
        return (
            <div className="">
                <p className="title is-5">What I'm Reading:</p>
                <p className="subtitle is-5 is-centered">
                    {' '}
                    {this.props.reading}
                </p>
                <br />
                <p className="title is-5">What I'm Writing:</p>
                <p className="subtitle is-5 is-centered">
                    {' '}
                    {this.props.writing}
                </p>
                <br />
                <p className="title is-5">WIP:</p>
                <p className="subtitle is-5 is-centered"> {this.props.WIP} </p>
                <br />
                <p className="title is-5">Cool Links</p>
                {/* {this.props.links.map(link => { */}
                <p className="subtitle is-5 is-centered"> {this.props.links}</p>
                {/* })} */}
            </div>
        );
    }
}

export default MyDesk;
