import { useState } from 'react';
import './App.css';

function App() {


  const [inputFields, setInputFields] = useState([{ min: "", max: "" , percent:""}]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { min: "", max: "", percent:"" };
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  }

  const submit = (event) => {
    event.preventDefault();

    // Validation
    var validEntry = true;

    if (validEntry == true) {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(inputFields)], {
          type: "application/json",
        });
        element.href = URL.createObjectURL(file);
        element.download = "Waterfall_Input.json";
        document.body.appendChild(element);
        element.click();
      }

  }

  return (
    <div className="App">
      <form  onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input className = "Waterfall-text-input"
                type="number"
                name='min'
                placeholder='Low Temp'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <input className = "Waterfall-text-input"
                type="number"
                name='max'
                placeholder='High Temp'
                value={input.age}
                onChange={event => handleFormChange(index, event)}
              />
              <input className = "Waterfall-text-input"
                type="number"
                name='percent'
                placeholder='Fan Level (%)'
                value={input.age}
                onChange={event => handleFormChange(index, event)}
              />

               <button className="Waterfall-remove-button" onClick={() => removeFields(index)}>-</button>
            </div>
          )
        })}
      </form>
      <button className="Waterfall-add-button"onClick={addFields}>+</button>
      <br/>
      <button className = "App-button" onClick={submit}>Submit</button>
    </div>
  );
}

export default App;