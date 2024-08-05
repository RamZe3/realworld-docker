import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  const makeApiRequest = () => {
    axios("/api/testcurrentUser").then(response => {
      console.log("response ", response)
      console.log("response ", response.data)
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={makeApiRequest}>testuser</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
