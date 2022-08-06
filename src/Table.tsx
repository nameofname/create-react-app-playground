import { Component } from "react";
import React from "react";

type TableProps = {
  rows: [
    {
      name: String;
      val: String;
    }
  ];
};

export class Table extends Component<TableProps> {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {this.props?.rows.map((row, idx) => (
            <tr>
              <td id={`name-${idx}`}>{row.name}</td>
              <td id={`val-${idx}`}>{row.val}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
