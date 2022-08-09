import { useState } from "react";
import { Actions } from "./Actions";
import { Display } from "./Display";
import { Numbers } from "./Numbers";
import { Operators } from "./Operators";
import "./calculator.css";

export interface CalcCBProps {
  clickHandler: Function;
}

export function getDivValue(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  cb: Function
) {
  e.stopPropagation();
  const target = e.target as HTMLDivElement; // type assertion to get around annoying issue!
  const value = target.innerText;
  cb(value);
}

export function CalculatorApp() {
  const [currValue, setCurrValue] = useState<Number>(0);
  const [operand, setOperand] = useState<String>("");
  const [operator, setOperator] = useState<String>("");

  function handleNumberClick(num: String) {
    const newVal = `${operand}${num}`;
    setOperand(newVal);
  }

  function handleOperatorClick(op: String) {
    setOperator(op);
  }

  function handleActionClick(a: String) {
    setCurrValue(Number(a)); // TODO !
  }

  function handleEqualsClick() {
    // if (currValue && operand && operator)
    if (operand && operator) {
      if (currValue !== 0)
        setCurrValue(eval(`${currValue}${operator}${operand}`));
    }
  }

  return (
    <div id="calc">
      <Display
        currValue={currValue}
        nextOperation={`${operator} ${operand}`}
        operand={operand}
      />
      <Actions clickHandler={handleActionClick} />
      <Numbers clickHandler={handleNumberClick} />
      <Operators
        clickHandler={handleOperatorClick}
        evalHandler={handleEqualsClick}
      />
    </div>
  );
}
