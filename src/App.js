// import logo from "./logo.svg";
import { Fragment } from "react";
import "./App.css";
import { InputForm } from "./InputForm";

function thisGuy() {
  return <p>adf</p>;
}

function App() {
  return (
    <Fragment>
      <InputForm />
      (thisGuy())
    </Fragment>
  );
}

export default App;
