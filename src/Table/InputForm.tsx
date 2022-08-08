type InputFormProps = {
  onSubmit: Function;
};

export const InputForm = (props: InputFormProps) => {
  function _onSubmit(e: React.SyntheticEvent) {
    const target = e.target as typeof e.target & {
      name: { value: string };
      val: { value: string };
    };
    const row = { name: target.name.value, val: target.val.value };
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
