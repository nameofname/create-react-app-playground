// mathematical operators, and maybe the equals sign?
import { CalcCBProps, getDivValue } from "./CalculatorApp";

type OperatorProps = CalcCBProps & {
  evalHandler: Function;
};

export function Operators(props: OperatorProps) {
  function clickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    return getDivValue(e, props.clickHandler);
  }
  function equalsClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    return props.evalHandler();
  }
  return (
    <>
      <div onClick={clickHandler} className="key c4 r2" id="divide">
        /
      </div>
      <div onClick={clickHandler} className="key c4 r3" id="multiply">
        x
      </div>
      <div onClick={clickHandler} className="key c4 r4" id="subtract">
        -
      </div>
      <div onClick={clickHandler} className="key c4 r5" id="add">
        +
      </div>
      <div onClick={equalsClick} className="key c4 r6" id="equals">
        =
      </div>
    </>
  );
}
