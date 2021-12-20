import logo from './logo.svg';
import './App.css';

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
      	<div className="bg-[#bbbdf6] font-bold text-4xl text-gray-800 px-4 py-2 rounded-lg mt-5">{'TailwindCSS 3.0 is awesome !'}</div>
      </header>
    </div>
  );
}

export default App;
