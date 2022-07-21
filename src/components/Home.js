import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import globalLowTemp from "./globalLowTemp";
import globalHighTemp from "./globalHighTemp";

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

const errorStyle = {
  paddingLeft: 60,
  paddingBottom: 10,
  fontSize: 20,
  color: '#ff0000',
}

function Home() {

  const [inputs, setInputs] = useState("");

  const [submitErr, setErrors] = useState("");

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //setErrors(errors + "");
    //console.log(errors);

    globalLowTemp.value = inputs["lowTemp"];
    globalHighTemp.value = inputs["highTemp"];

    var validEntry = true;
    var errorString = "";

    var hasEmptyField = (
      inputs["numFanTrays"] == null || inputs["numFansPerTray"] == null || inputs["numRemovedTrays"] == null
      || inputs["numHZones"] == null || inputs["numVZones"] == null || inputs["airFlowDir"] == null 
      || inputs["lifetime"] == null || inputs["lowTemp"] == null || inputs["highTemp"] == null
      || inputs["ambientTemp"] == null || inputs["tenPercentRPM"] == null || inputs["twentyPercentRPM"] == null
      || inputs["thirtyPercentRPM"] == null || inputs["fortyPercentRPM"] == null || inputs["fiftyPercentRPM"] == null
      || inputs["sixtyPercentRPM"] == null || inputs["seventyPercentRPM"] == null || inputs["eightyPercentRPM"] == null
      || inputs["ninetyPercentRPM"] == null || inputs["hundredPercentRPM"] == null || inputs["coolingType"] == null
      || inputs["maxPower"] == null
      )

    if (hasEmptyField == true)
      {
        errorString += "You must fill all fields \n";
        validEntry = false;
      }
    else {
      if (parseInt(inputs["numRemovedTrays"]) >= parseInt(inputs["numFanTrays"])) {
        errorString += "Number of removed trays must be less than number of trays. \n";
        validEntry = false;
      }
  
      if ((parseInt(inputs["numFanTrays"])%parseInt(inputs["numVZones"])) != 0) {
        errorString += "Number of vertical zones must be a divisor of number of trays. \n";
        validEntry = false;
      }
  
      if ((parseInt(inputs["numFansPerTray"])%parseInt(inputs["numHZones"])) != 0) {
        errorString += "Number of horizontal zones must be a divisor of fans per tray. \n";
        validEntry = false;
      }
      
      if (inputs["airFlowDir"] == "") {
        errorString += "Must choose an airflow direction. \n";
        validEntry = false;
      }
  
      if (parseInt(inputs["lifetime"]) <= 0) {
        errorString += "Desired Lifetime must be positive. \n";
        validEntry = false;
      }
  
      if (parseInt(inputs["lowTemp"]) > parseInt(inputs["highTemp"])) {
        errorString += "Maximum Temperature must be greater than Minimum Temperature. \n";
        validEntry = false;
      }
  
      if ((parseInt(inputs["tenPercentRPM"])) < 0) {
        errorString += "10% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["twentyPercentRPM"])) < 0) {
        errorString += "20% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["thirtyPercentRPM"])) < 0) {
        errorString += "30% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["fortyPercentRPM"])) < 0) {
        errorString += "40% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["fiftyPercentRPM"])) < 0) {
        errorString += "50% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["sixtyPercentRPM"])) < 0) {
        errorString += "60% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["seventyPercentRPM"])) < 0) {
        errorString += "70% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["eightyPercentRPM"])) < 0) {
        errorString += "80% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["ninetyPercentRPM"])) < 0) {
        errorString += "90% RPM must be positive. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["hundredPercentRPM"])) < 0) {
        errorString += "100% RPM must be positive. \n";
        validEntry = false;
      }
  
      if ((parseInt(inputs["twentyPercentRPM"])) < (parseInt(inputs["tenPercentRPM"]))) {
        errorString += "20% RPM must be greater than 10% RPM. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["thirtyPercentRPM"])) < (parseInt(inputs["twentyPercentRPM"]))) {
        errorString += "30% RPM must be greater than 20% RPM. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["fortyPercentRPM"])) < (parseInt(inputs["thirtyPercentRPM"]))) {
        errorString += "40% RPM must be greater than 30% RPM. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["fiftyPercentRPM"])) < (parseInt(inputs["fortyPercentRPM"]))) {
        errorString += "50% RPM must be greater than 40% RPM. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["sixtyPercentRPM"])) < (parseInt(inputs["fiftyPercentRPM"]))) {
        errorString += "60% RPM must be greater than 50% RPM. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["seventyPercentRPM"])) < (parseInt(inputs["sixtyPercentRPM"]))) {
        errorString += "70% RPM must be greater than 60% RPM. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["eightyPercentRPM"])) < (parseInt(inputs["seventyPercentRPM"]))) {
        errorString += "80% RPM must be greater than 70% RPM. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["ninetyPercentRPM"])) < (parseInt(inputs["eightyPercentRPM"]))) {
        errorString += "90% RPM must be greater than 80% RPM. \n";
        validEntry = false;
      }
      if ((parseInt(inputs["hundredPercentRPM"])) < (parseInt(inputs["ninetyPercentRPM"]))) {
        errorString += "100% RPM must be greater than 90% RPM. \n";
        validEntry = false;
      }
  
      if (inputs["coolingType"] == "") {
        errorString += "Must choose a cooling type. \n";
        validEntry = false;
      }
  
      if (parseInt(inputs["maxPower"]) < 0) {
        errorString += "Maximum Power must be positive. \n";
        validEntry = false;
      }
  
    }

    setErrors(errorString);

    if (validEntry == true) {
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(inputs)], {
        type: "application/json",
      });
      element.href = URL.createObjectURL(file);
      element.download = "Fan_Input.json";
      document.body.appendChild(element);
      element.click();
    }

  };


  return (
    <background className="App-background">
      <form onSubmit={handleSubmit}>
        <table border="0">
          <tr>
            <td>
              <label style={labelStyle}>Number of Fan Trays:</label>
            </td>
            <td>
              <input
                id="numFanTrays"
                className="App-text-input"
                type="number"
                name="numFanTrays"
                value={inputs.numFanTrays || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Fans per Tray:</label>
            </td>
            <td>
              <input
                id="numFansPerTray"
                className="App-text-input"
                type="number"
                name="numFansPerTray"
                value={inputs.numFansPerTray || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Number of Removed Fan Trays:</label>
            </td>
            <td>
              <input
                id="numRemovedTrays"
                className="App-text-input"
                type="number"
                name="numRemovedTrays"
                value={inputs.numRemovedTrays || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Number of Horizontal Zones:</label>
            </td>
            <td>
              <input
                id="numHZones"
                className="App-text-input"
                type="number"
                name="numHZones"
                value={inputs.numHZones || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Number of Vertical Zones:</label>
            </td>
            <td>
              <input
                id="numVZones"
                className="App-text-input"
                type="number"
                name="numVZones"
                value={inputs.numVZones || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Airflow Direction:</label>
            </td>
            <td>
              <select
                className="App-dropdown"
                id="airFlowDir"
                name="airFlowDir"
                value={inputs.airFlowDir || ""}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="frontToBack">Front to Back</option>
                <option value="backToFront">Back to Front</option>
                <option value="biDirectional">Bi-directional</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Desired Lifetime:</label>
            </td>
            <td>
              <input
                id="lifetime"
                className="App-text-input"
                type="number"
                name="lifetime"
                value={inputs.lifetime || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>years</label>
            </td>
          </tr>

          <tr>
            <td>
              <label style={labelStyle}>Minimum Operating Temperature: </label>
            </td>
            <td>
              <input
                id="lowTemp"
                className="App-text-input"
                type="number"
                name="lowTemp"
                value={inputs.lowTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}> Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Maximum Operating Temperature: </label>
            </td>
            <td>
              <input
                id="highTemp"
                className="App-text-input"
                type="number"
                name="highTemp"
                value={inputs.highTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}> Celsius</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Ambient Air Temperature: </label>
            </td>
            <td>
              <input
                id="ambientTemp"
                className="App-text-input"
                type="number"
                name="ambientTemp"
                value={inputs.ambientTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}> Celsius</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <label style={blueLabelStyle}>Fan RPM at each level below</label>
            </td>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>10%: </label>
            </td>
            <td>
              <input
                id="tenPercentRPM"
                className="App-text-input"
                type="number"
                name="tenPercentRPM"
                value={inputs.tenPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>20%: </label>
            </td>
            <td>
              <input
                id="twentyPercentRPM"
                className="App-text-input"
                type="number"
                name="twentyPercentRPM"
                value={inputs.twentyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>30%: </label>
            </td>
            <td>
              <input
                id="thirtyPercentRPM"
                className="App-text-input"
                type="number"
                name="thirtyPercentRPM"
                value={inputs.thirtyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>40%: </label>
            </td>
            <td>
              <input
                id="fortyPercentRPM"
                className="App-text-input"
                type="number"
                name="fortyPercentRPM"
                value={inputs.fortyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>50%: </label>
            </td>
            <td>
              <input
                id="fiftyPercentRPM"
                className="App-text-input"
                type="number"
                name="fiftyPercentRPM"
                value={inputs.fiftyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>60%: </label>
            </td>
            <td>
              <input
                id="sixtyPercentRPM"
                className="App-text-input"
                type="number"
                name="sixtyPercentRPM"
                value={inputs.sixtyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>70%: </label>
            </td>
            <td>
              <input
                id="seventyPercentRPM"
                className="App-text-input"
                type="number"
                name="seventyPercentRPM"
                value={inputs.seventyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>80%: </label>
            </td>
            <td>
              <input
                id="eightyPercentRPM"
                className="App-text-input"
                type="number"
                name="eightyPercentRPM"
                value={inputs.eightyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>90%: </label>
            </td>
            <td>
              <input
                id="ninetyPercentRPM"
                className="App-text-input"
                type="number"
                name="ninetyPercentRPM"
                value={inputs.ninetyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>100%: </label>
            </td>
            <td>
              <input
                id="hundredPercentRPM"
                className="App-text-input"
                type="number"
                name="hundredPercentRPM"
                value={inputs.hundredPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Waterfall or Granular Cooling:</label>
            </td>
            <td>
              <select
                className="App-dropdown"
                id="coolingType"
                name="coolingType"
                value={inputs.coolingType || ""}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="waterfall">Waterfall</option>
                <option value="granular">Granular</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label style={labelStyle}>Max Power Consumption Per Fan: </label>
            </td>
            <td>
              <input
                id="maxPower"
                className="App-text-input"
                type="number"
                name="maxPower"
                value={inputs.maxPower || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Watts</label>
            </td>
          </tr>
          <input id="submitButton" type="submit" className="App-button"></input>
          <br />
          <label id="ERRORS" style={errorStyle}>
            {" "}
            {submitErr}{" "}
          </label>
          <tr>
            <td>
              <div class="col-lg-5">
                <li className="nav-item">
                  <NavLink
                    className="nav-link" to={inputs["coolingType"] == "waterfall" ? "/waterfall" : inputs["coolingType"] == "granular" ? "/granular" : "/"}>
                    Next
                  </NavLink>
                </li>
              </div>
            </td>
          </tr>
        </table>
        <br/>
        <br/>
      </form>
    </background>
  );
}

export default Home;