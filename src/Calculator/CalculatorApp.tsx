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

function trimLeadingZeros(s: String) {
  const sign = s.slice(0, 1) === "-" ? "-" : "";
  return `${sign}${s.replace(sign, "").replace(/^0+/g, "")}`;
}

export function CalculatorApp() {
  const [currValue, setCurrValue] = useState<String>("0");
  const [operand, setOperand] = useState<String>("");
  const [operator, setOperator] = useState<String>("");
  const [writeToCurr, setWriteTo] = useState<Boolean>(true);

  function handleNumberClick(num: String) {
    if (writeToCurr) {
      setCurrValue(trimLeadingZeros(`${currValue}${num}`));
    } else {
      setOperand(trimLeadingZeros(`${operand}${num}`));
    }
  }

  function handleOperatorClick(op: String) {
    setOperator(op);
    setWriteTo(false);
  }

  function handleSignClick(sign: String) {
    if (writeToCurr) {
      if (currValue.slice(0, 1) === "-") {
        setCurrValue(currValue.slice(1, currValue.length));
      } else {
        setCurrValue(trimLeadingZeros(`-${currValue}`));
      }
    } else {
      if (operand.slice(0, 1) === "-") {
        setOperand(operand.slice(1, operand.length));
      } else {
        setOperand(trimLeadingZeros(`-${operand}`));
      }
    }
  }

  function handleClearClick(a: String) {
    setCurrValue("0");
    setOperand("");
    setOperator("");
    setWriteTo(true);
  }

  function handleEqualsClick() {
    if (operand && operator) {
      setCurrValue(eval(`${currValue}${operator}${operand}`));
      setOperand("");
      setOperator("");
    }
  }

  return (
    <div id="calc">
      <Display
        currValue={currValue}
        nextOperation={`${operator} ${operand}`}
        operand={operand}
      />
      <Actions signHandler={handleSignClick} clearHandler={handleClearClick} />
      <Numbers clickHandler={handleNumberClick} />
      <Operators
        clickHandler={handleOperatorClick}
        evalHandler={handleEqualsClick}
      />
    </div>
  );
}
