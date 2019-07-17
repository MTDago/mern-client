import React, { Component } from 'react';
import Title from '../components/Title';
import '../App.sass';
import { bookAPI } from '../API/init';
import axios from 'axios';

export default class NewBook extends Component {
    state = {
        title: '',
        cost: '',
        blurb: '',
        published: '',
        series: ''
    };

    handleSubmit = event => {
        event.preventDefault()
        const { title, cost, blurb, published, series } = this.state;
        axios.post(bookAPI, {
            title: title,
            cost: cost,
            blurb: blurb,
            published: published,
            series: series
        });
        console.log('SOmethign happened')
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const {title, cost, blurb, published, series} = this.state
        return (
            <div>
                <Title title="Add a book to sell." />
                <form
                    className="columns is-mobile is-centered"
                    onSubmit={this.handleSubmit}
                >
                    <div className="colum is-half is-narrow">
                        {/* TITLE */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="title"
                            placeholder="Enter the Title"
                            value={title}
                            onChange={this.handleChange}
                        />

                        <br/><br/><br/>

                        {/* COST*/}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="cost"
                        >
                            Cost
                        </label>
                        <input
                            className="input is-rounded"
                            name="cost"
                            type="number"
                            value={cost}
                            onChange={this.handleChange}
                        />

                        <br/><br/><br/>

                        {/* BLURB */}
                        <label
                            className="label has-text-centered is-uppercase"
                            htmlFor="blurb"
                        >
                            Description
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="blurb"
                            placeholder="Enter the blurb"
                            value={blurb}
                            onChange={this.handleChange}
                        />

                        <br/><br/><br/>
                    
                        {/* PUBLISHED */}
                        <label
                            className="label has-text-centered is-uppercase" 
                            htmlFor="published">
                            Date Published:
                        </label>
                        <input
                            className="input is-rounded" 
                            type="month"
                            name="published" 
                            value={published}
                            onChange={this.handleChange}
                            />

                        <br/><br/><br/>

                        {/* SERIES */}
                        <label 
                            className="label has-text-centered is-uppercase"
                            htmlFor="series">
                            What series is it part of:
                        </label>
                        <input
                            className="input is-rounded"
                            type="text"
                            name="series"
                            value={series}
                            onChange={this.handleChange} />
                        
                        <br/><br/>
                        
                        <button className="button is-rounded" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
