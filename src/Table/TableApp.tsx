import { Component } from "react";
import "./TableApp.css";
import { InputForm } from "./InputForm";
import { Table } from "./Table";

type TableAppRow = {
  name: String;
  val: String;
};

export type TableAppState = {
  rows: TableAppRow[];
};

export class TableApp extends Component<any, TableAppState> {
  constructor() {
    super(arguments[0]);
    this.state = {
      rows: [],
    };
  }

  render() {
    return (
      <>
        <InputForm
          onSubmit={(row: TableAppRow) => {
            this.setState({
              rows: this.state.rows.concat(row),
            });
          }}
        />
        <Table rows={this.state.rows} />
      </>
    );
  }
}
