import React, { Component } from "react";
import data from "../helpers/data.json";

const ListItem = ({ url, name }) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};
export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>

        <ol>
          {this.state.seasons.map((season) => (
            <li kye={season}>{season}</li>
          ))}

          <h3>FrameWorks frontEnd JavaScript</h3>
          <ul>
            {data.frameworks.map((framework, index) => (
              <ListItem key={index} url={framework.web} name={framework.name} />
            ))}
          </ul>
        </ol>
      </div>
    );
  }
}
