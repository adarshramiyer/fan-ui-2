import React from "react";
import { useState } from "react";
import "./App.css";

const labelStyle = {
  paddingLeft: 25,
  paddingRight: 25,
  paddingTop: 0,
  paddingBottom: 10,
  color: "#282828",
  fontSize: 30,
};

const blueLabelStyle = {
  paddingLeft: 25,
  paddingRight: 25,
  paddingTop: 0,
  paddingBottom: 10,
  color: "#049fd9",
  fontSize: 30,
};

const unitLabelStyle = {
  paddingLeft: 10,
  paddingRight: 25,
  paddingTop: 10,
  paddingBottom: 10,
  color: "#049fd9",
  fontSize: 25,
};

function Granular() {

  const [inputs, setInputs] = useState([
    {
      tenPercentTemp: "",
      twentyPercentTemp: "",
      thirtyPercentTemp: "",
      fortyPercentTemp: "",
      fiftyPercentTemp: "",
      sixtyPercentTemp: "",
      seventyPercentTemp: "",
      eightyPercentTemp: "",
      ninetyPercentTemp: "",
      hundredPercentTemp: "",
    },
  ]);

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var validEntry = true;

    if (validEntry == true) {
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(inputs)], {
        type: "application/json",
      });
      element.href = URL.createObjectURL(file);
      element.download = "Granular_Input.json";
      document.body.appendChild(element);
      element.click();
    }
  };

  

  return (
    <background className="App-background">
      <form onSubmit={handleSubmit}>
        <label style={blueLabelStyle}>
          Enter Temperature at which to run following fan levels:
        </label>
        <table border="0">
          <tr>
            <td>
              <label style={labelStyle}>10%: </label>
            </td>
            <td>
              <input
                id="tenPercentTemp"
                className="App-text-input"
                type="number"
                name="tenPercentTemp"
                value={inputs.tenPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>20%: </label>
            </td>
            <td>
              <input
                id="twentyPercentTemp"
                className="App-text-input"
                type="number"
                name="twentyPercentTemp"
                value={inputs.twentyPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>30%: </label>
            </td>
            <td>
              <input
                id="thirtyPercentTemp"
                className="App-text-input"
                type="number"
                name="thirtyPercentTemp"
                value={inputs.thirtyPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>40%: </label>
            </td>
            <td>
              <input
                id="fortyPercentTemp"
                className="App-text-input"
                type="number"
                name="fortyPercentTemp"
                value={inputs.fortyPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>50%: </label>
            </td>
            <td>
              <input
                id="fiftyPercentTemp"
                className="App-text-input"
                type="number"
                name="fiftyPercentTemp"
                value={inputs.fiftyPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>60%: </label>
            </td>
            <td>
              <input
                id="sixtyPercentTemp"
                className="App-text-input"
                type="number"
                name="sixtyPercentTemp"
                value={inputs.sixtyPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>70%: </label>
            </td>
            <td>
              <input
                id="seventyPercentTemp"
                className="App-text-input"
                type="number"
                name="seventyPercentTemp"
                value={inputs.seventyPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>80%: </label>
            </td>
            <td>
              <input
                id="eightyPercentTemp"
                className="App-text-input"
                type="number"
                name="eightyPercentTemp"
                value={inputs.eightyPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>90%: </label>
            </td>
            <td>
              <input
                id="ninetyPercentTemp"
                className="App-text-input"
                type="number"
                name="ninetyPercentTemp"
                value={inputs.ninetyPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>100%: </label>
            </td>
            <td>
              <input
                id="hundredPercentTemp"
                className="App-text-input"
                type="number"
                name="hundredPercentTemp"
                value={inputs.hundredPercentTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Celsius</label>
            </td>
          </tr>
        </table>
        <input id="submitButton" type="submit" className="App-button"></input>
      </form>
    </background>
  );
}

export default Granular;
