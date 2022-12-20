import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "componentWillUnmount");
  }
  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "Constructor");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log(2, "componentDidUpdate", { prevProps, prevStates });
  }

  componentWillUnmount() {
    console.log(3, "componentWillUnmount");
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  };

  iniciar = (e) => {
    this.setState({ visible: true });
    this.tictac();
  };

  detener = (e) => {
    this.setState({ visible: false });
    clearInterval(this.temporizador);
  };
  render() {
    console.log(4, "Render");
    return (
      <div>
        <h2>Ciclo de vida de los componentes de clase</h2>
        {this.state.visible ? <Reloj hora={this.state.hora} /> : false}

        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </div>
    );
  }
}
