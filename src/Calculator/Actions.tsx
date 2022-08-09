// actions include clear, and +/-
import { CalcCBProps, getDivValue } from "./CalculatorApp";

export function Actions(props: CalcCBProps) {
  function clickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    return getDivValue(e, props.clickHandler);
  }

  return (
    <>
      <div onClick={clickHandler} className="key" id="clear">
        C
      </div>
      <div onClick={clickHandler} className="key" id="plusMinus">
        +/-
      </div>
    </>
  );
}
