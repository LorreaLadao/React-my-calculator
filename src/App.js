import React from 'react';
import { useState } from "react";
import './App.css';

function CalcButton({ label, onClick, buttonClassName = "CalcButton" }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

export default function App() {

  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [oper, setOper] = useState(null);
  const [num2, setNum2] = useState(null);

  const numberButton = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    var num = value;
    if (oper === null) {
      if (num1 !== null) {
        num = num1 + num;
      }
      setNum1(num);
      setDisp(num);
    } else {
      if (num2 !== null) {
        num = num2 + num;
      }
      setNum2(num);
      setDisp(num);
    }
  }

  const operator = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
  }

  const equalOperator = (e) => {
    e.preventDefault();

    if (oper === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    } else if (oper === "-") {
      setDisp(parseInt(num1) - parseInt(num2));
    } else if (oper === "*") {
      setDisp(parseInt(num1) * parseInt(num2));
    } else if (oper === "÷") {
      setDisp(parseInt(num1) / parseInt(num2));
    } else {
      setDisp("ERROR");
    }
  }

  const clear = (e) => {
    e.preventDefault();

    setDisp(0);
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  const name = (e) => {
    e.preventDefault();
    setDisp("Lorrea Ladao");    
  }

  return (
    <div className="App">
      <div className="CalcContainer">
      <h1> Calculator of Lorrea Ladao - IT3A</h1>
        <Display display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={7} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={8} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={9} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"+"} onClick={operator} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={4} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={5} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={6} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"-"} onClick={operator} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={1} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={2} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={3} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"*"} onClick={operator} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"C"} onClick={clear} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={0} onClick={numberButton} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"="} onClick={equalOperator} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={"÷"} onClick={operator} buttonClassName={"CalcButtonNum"}/>
        </div>
        <div className="Name">
          <CalcButton label={"LADAO"} onClick={name} buttonClassName={"CalcButtonName"}/>
        </div>
      </div>
      </div>
  );
}
