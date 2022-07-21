import React from "react";
import { useState } from "react";
import "./App.css";
import globalLowTemp from "./globalLowTemp";
import globalHighTemp from "./globalHighTemp";

function Granular() {
  var lowTemp = globalLowTemp.value;
  var highTemp = globalHighTemp.value;
  var numInputs = highTemp - lowTemp;

  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
  let initialState = {};

  arr.forEach((element) => {
    initialState[element] = "";
  });
  console.log(initialState);
  const [input, setInput] = useState(initialState);
  let inputName = 0;

  const handleUserInputChange = (e) => {
    const name = e.target.name;
    const newValue = e.target.value;
    setInput({ [name]: newValue });
  };

  const a = arr.map((number) => {
    inputName++;
    return (
      <div key={number}>
        <input
          value={input[inputName]}
          name={inputName}
          onChange={handleUserInputChange}
        ></input>
      </div>
    );
  });
}

export default Granular;