import React, { Component } from 'react'

export default class CCCounter extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
    }

    incrementar = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementar} > Contador : {this.state.count}</button>
            </div>
        )
    }
}
