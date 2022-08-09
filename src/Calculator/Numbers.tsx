import React from "react";
import { CalcCBProps, getDivValue } from "./CalculatorApp";

export function Numbers(props: CalcCBProps) {
  function clickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    return getDivValue(e, props.clickHandler);
  }

  return (
    <>
      <div onClick={clickHandler} className="key c1" id="seven">
        7
      </div>
      <div onClick={clickHandler} className="key c2" id="eight">
        8
      </div>
      <div onClick={clickHandler} className="key c3" id="nine">
        9
      </div>
      <div onClick={clickHandler} className="key c1" id="four">
        4
      </div>
      <div onClick={clickHandler} className="key c2" id="five">
        5
      </div>
      <div onClick={clickHandler} className="key c3" id="six">
        6
      </div>
      <div onClick={clickHandler} className="key c1" id="one">
        1
      </div>
      <div onClick={clickHandler} className="key c2" id="two">
        2
      </div>
      <div onClick={clickHandler} className="key c3" id="three">
        3
      </div>
      <div onClick={clickHandler} className="key" id="zero">
        0
      </div>
      <div onClick={clickHandler} className="key c3" id="decimal">
        .
      </div>
    </>
  );
}
