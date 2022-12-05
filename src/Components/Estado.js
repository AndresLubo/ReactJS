import React, { Component } from 'react';

class Estado extends Component {
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);
    }

    render(){
        return(
            <>
                <h2>{this.state.contador}</h2>
            </>
        )
    }
}

export default Estado;

