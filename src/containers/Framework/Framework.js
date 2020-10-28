import React, { Component } from 'react';

class Framework extends Component {
    state = {
        frameworkTitle: ''
    }

    componentDidMount (){
        this.queryParams ();
    }

    componentDidUpdate (){
        this.queryParams ();
    }

    queryParams () {
        const query = new URLSearchParams(this.props.location.search);
        for (let params of query.entries()){
            if (this.state.frameworkTitle !== params[1]) {
                this.setState({frameworkTitle: params[1]});
            };
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.frameworkTitle}</h1>
                <p>You selected the Framework with ID: {this.props.match.params.id} </p>
            </div>
        )
    }
}

export default Framework;