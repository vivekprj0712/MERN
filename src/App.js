import logo from './logo.svg';
import './App.css';

function App() {
  var a = 10;
  var isActive = true;
  var user ={
    name:"vivek",
    age : 21
  }
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

          <h1>{a}</h1>
          <h2>isActive: {isActive ? "Active" : "Is Not Active"}</h2>
          <h2>user Name : {user.name}</h2>
          <h2>user Age : {user.age}</h2>
    </div>
  );
}

export default App;
