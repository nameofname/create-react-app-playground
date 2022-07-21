import { Component } from "react";

export class InputForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = function (e) {
      const row = { name: e.target.name.value, val: e.target.val.value };
      props.onSubmit(row);
      e.preventDefault();
    };
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="name" type="text" />
        <input name="val" type="text" />
        <input type="submit" text="submit" />
      </form>
    );
  }
}
