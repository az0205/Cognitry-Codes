import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [theme, changeTheme] = useState(true);
  let bc;
  if (theme)
    bc = 'white';
  else
    bc = 'blue';

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

    <div style = {{backgroundColor: bc, padding: '50px, 50px'}}>
      <h1>React Theme Switcher</h1>
      <button onClick={() => changeTheme(!theme)}>
        Switch Theme
      </button>
    </div>

  );
}

export default App;
