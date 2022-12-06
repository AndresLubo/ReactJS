import React, {Component} from 'react';

class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props);

        this.state = {
            condicion: true
        }
    }

    render(){
        return(
            <>
                {
                    this.state.condicion
                    ? <h2> La condición es true </h2>
                    : <h2>La condición es false </h2>
                }            
            </>
        )
    }
}


export default RenderizadoCondicional;