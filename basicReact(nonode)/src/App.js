import logo from './logo.svg';
import './App.css';
import Title from './components/comp1';
import Heading from './components/comp2';
import Paragraph from './components/comp3';

function App() {
  return (
    /*<div className="App">
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
    </div>*/
    <div>
      <Title />
      <Heading />
      <Paragraph />
    </div>

  );
}

export default App;
