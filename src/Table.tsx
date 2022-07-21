import { Component } from "react";

export class Table extends Component {
  constructor(props) {
    super(props);
  }

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
          {this.props.rows.forEach((row, idx) => {
            return (
              <tr>
                <td id={`name-${idx}`}>row.name</td>
                <td id={`val-${idx}`}>row.name</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
