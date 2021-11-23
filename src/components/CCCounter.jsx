import React, { Component } from 'react'

export default class CCCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementar = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        // ocorre após a renderização do componente (após ele ser montado)
        document.title = `Você clicou ${this.state.count} vezes`;
    }
    componentDidUpdate() {
        // ocorre após um update, que causa uma nova rendereização
        // mas não é chamado pelo inital render
        document.title = `Você clicou ${this.state.count} vezes`;
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementar} > Contador : {this.state.count}</button>
            </div>
        )
    }
}
