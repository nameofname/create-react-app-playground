export type DisplayProps = {
  currValue: String;
  nextOperation: String;
  operand: String;
};

export function Display(props: DisplayProps) {
  return (
    <div className="key" id="display">
      <div className="currValue">{`${props.currValue}`}</div>
      <div id="nextOperation">{props.nextOperation}</div>
    </div>
  );
}
