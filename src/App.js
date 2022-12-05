import logo from './logo.svg';
import './App.css';
import Componente from './Components/Componente';
import Props from './Components/Props';
import Estado from './Components/Estado';

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



      </section>
    </div>
  );
}

export default App;
