import React, {Component} from 'react';

class Componente extends Component {
    render(){
        return(
            <h2>{this.props.message}</h2>  
        )
    }
}


// const Componente = (props) => {
//     return(
//         <h2>props.message</h2>
//     )
// }



export default Componente;