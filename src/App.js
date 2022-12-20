import logo from "./logo.svg";
import "./App.css";
import Componente from "./Components/Componente";
import Props from "./Components/Props";
import Estado from "./Components/Estado";
import RenderizadoCondicional from "./Components/Renderizado";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./Components/Eventos";
import Padre from "./Components/ComunicacionComponentes";
import CicloVida from "./Components/CicloVida";
import AjaxApis from "./Components/AjaxApis";
import ContadorHooks from "./Components/ContadorHooks";
import ScrollHooks from "./Components/ScrollHooks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section>
        <Componente message="Esta es mi primera props" />
        <Props propiedad="Esto es una propiedad" />
        <Estado />
        <hr />

        <RenderizadoCondicional />
        <hr />

        <RenderizadoElementos />
        <hr />

        <EventosES6 />
        <hr />

        <EventosES7 />
        <hr />

        <MasSobreEventos />
        <hr />

        <Padre />
        <hr />

        <CicloVida />
        <hr />

        <AjaxApis />

        <hr />
        <ContadorHooks />

        <hr/>

        <ScrollHooks/>

        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
}

export default App;
