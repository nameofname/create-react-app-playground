// display of the calculated answer
export type DisplayProps = {
  currValue: Number;
  nextOperation: String;
  operand: String;
};

export function Display(props: DisplayProps) {
  // TODO !
  // const { currValue, nextOperation, operand } = props;
  // const valueDisplay = String(currValue === 0 ? operand : currValue).trim();
  // const shownOp = (currValue === 0 ? '' : nextOperation).trim();

  return (
    <div className="key" id="display">
      {/* <div className="currValue">{`${valueDisplay || '0'}`}</div>
            <div id="nextOperation">{shownOp}</div> */}
      <div className="currValue">{`${props.currValue}`}</div>
      <div id="nextOperation">{props.nextOperation}</div>
    </div>
  );
}
