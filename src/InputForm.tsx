import React from "react";

type InputFormProps = {
  onSubmit: Function;
};

export const InputForm = (props: InputFormProps) => {
  function _onSubmit(e) {
    const row = { name: e.target.name.value, val: e.target.val.value };
    props.onSubmit(row);
    e.preventDefault();
  }
  return (
    <form onSubmit={_onSubmit}>
      <input name="name" type="text" />
      <input name="val" type="text" />
      <input type="submit" value="submit" />
    </form>
  );
};
