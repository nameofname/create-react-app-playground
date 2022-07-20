// import logo from "./logo.svg";
import "./App.css";
import { InputForm } from "./InputForm"; 
import { fragment } from 'react';

function thisGuy() { return <p>heyp</p>}

function App() {
  return (
    <fragment>
      <InputForm />
      (thisGuy())
    </fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
