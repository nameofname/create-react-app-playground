// import logo from "./logo.svg";
import { Component, Fragment } from "react";
import "./App.css";
import { InputForm } from "./InputForm.tsx";
import { Table } from "./Table.tsx";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  render() {
    return (
      <Fragment>
        <InputForm
          onSubmit={(row) => {
            console.log(row);
            this.state.rows.push(row);
          }}
        />
        <Table rows={this.state.rows} />
      </Fragment>
    );
  }
}
