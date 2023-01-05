import { useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    setMinRange(+e.target.firstNumber.value);
    setMaxRange(+e.target.lastNumber.value);
  }

  function handleGenerateNumber(){
    function generateRandomNumber(min, max){
      if (min === 0 && max === 0) return;
      setRandomNumber(Math.floor(Math.random() * (max - min) + min));
    }
    generateRandomNumber(minRange, maxRange);
  }

  return (
    <div className="App">
      <div className="mainDiv">
        <h1 className="textTitle">Random Number generator!</h1>
        <p>Type the range that will generate the number:</p>
        <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <div>
            <p className="inputDesc">Min</p>
            <input className="numberInput" type="number" name="firstNumber"></input>
          </div>
          <div>
            <p className="inputDesc">Max</p>
            <input className="numberInput" type="number" name="lastNumber"></input>
          </div>
        </div>
        <button className="calculateButton" onClick={handleGenerateNumber}>Calculate</button>
        </form>
        <p>{ randomNumber === null ? "No number generated yet" : "Random Number generated: " + randomNumber }</p>
      </div>
    </div>
  );
}

export default App;
