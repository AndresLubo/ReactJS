import { render } from "@testing-library/react";
import React, {Component} from "react";


export class EventosES6 extends Component {
  constructor(props){
    super(props)

    this.state = {
      contador: 0
    }

    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }

  sumar(e){
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar(e){
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render(){
    return (
      <div>
        <h2>Eventos en componentes de clase</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}> + </button>
          <button onClick={this.restar}> - </button>
        </nav>
      </div>
    )
  }
}



export class EventosES7 extends Component {
  state = {contador: 0}

  sumar = (e) => {
      this.setState({
        contador: this.state.contador + 1
      })
  }

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render(){
    return (
      <div>
        <h2>Eventos en componentes de clase</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}> + </button>
          <button onClick={this.restar}> - </button>
        </nav>
      </div>
    )
  }
}

const Boton = (props) => {
  return (
    <button onClick={props.myOnClick}>Evento personalizado</button>
  )
}

export class MasSobreEventos extends Component {

  handleClick = (e, mensaje) => {
    // Evento sintètico
    console.log(e);

    // Elemento que genera ese evento
    console.log(e.target);

    // Evento nativo de javaScript
    console.log(e.nativeEvent);

    // Elemento que ejecuta ese evento nativo
    console.log(e.nativeEvent.target);

    // Evento con mas paràmetros
    console.log(mensaje);
  }
  render(){
    return (
      <div>
        <h2>Más sobre eventos</h2>
        <button onClick={(e) => this.handleClick(e, 'Pasando parametros desde el manejador de eventos')}>Saludar</button>
        <Boton myOnClick={(e) => this.handleClick(e, 'Pasando parametros desde el manejador de eventos')}/>
      </div>
    )
  }
}