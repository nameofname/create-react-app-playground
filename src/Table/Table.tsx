import { Component } from "react";
import { TableAppState } from "./TableApp";

export class Table extends Component<TableAppState> {
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
