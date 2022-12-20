import logo from './logo.svg';
import './App.css';
import Componente from './Components/Componente';
import Props from './Components/Props';
import Estado from './Components/Estado';
import RenderizadoCondicional from './Components/Renderizado';
import RenderizadoElementos from './Components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './Components/Eventos';

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

    <Componente message="Esta es mi primera props"/>
    <Props propiedad="Esto es una propiedad"/>
    <Estado/>
    <RenderizadoCondicional/>

    <RenderizadoElementos/>
    <EventosES6/>
    <EventosES7/>
    <MasSobreEventos/>

<br/><br/><br/><br/>
      </section>
    </div>
  );
}

export default App;
