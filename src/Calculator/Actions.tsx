type ActionCBProps = {
  clearHandler: Function;
  signHandler: Function;
};

export function Actions(props: ActionCBProps) {
  function handleClearClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    props.clearHandler();
  }
  function handleSignClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    props.signHandler();
  }
  return (
    <>
      <div onClick={handleClearClick} className="key" id="clear">
        C
      </div>
      <div onClick={handleSignClick} className="key" id="plusMinus">
        +/-
      </div>
    </>
  );
}
