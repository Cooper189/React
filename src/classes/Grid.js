import React, { Component } from 'react';
import axios from 'axios'

class Grid extends Component {
    constructor (props) {
        super(props);
        this.state = {
            td: []
        };
        axios.get(`/api/news/grid/${this.props.screenId}/`).then((arr) => {
            this.setState({td: arr.data});
        })
    }
    render() {
        return (
            <div>
                <h1>Grid: {this.props.screenId}</h1>
                <div>{this.state.td.map((val, index) => {
                    return <div key={index}>{val}</div>
                })}</div>
            </div>
        )
    }
}

export default Grid