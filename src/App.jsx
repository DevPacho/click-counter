import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import { useState } from 'react'

function App() {

  const [clicksNumber, setClicksNumber] = useState(0)

  const clickHandler = () => {
    setClicksNumber(clicksNumber + 1)
  }

  const resetCounter = () => {
    setClicksNumber(0)
  }

  return (
    <div className="App">

      <div className="freeCodeCamp-logo-container">
        <img
          className="freeCodeCamp-logo"
          src={freeCodeCampLogo}
          alt="freeCodeCamp logo" />
      </div>

      <div className="counter-container">
        <Counter
          clicksNumber={clicksNumber} />

        <Button
          text="Click! 🎯"
          isButtonClick={true}
          clickHandler={clickHandler}
          />

        <Button
          text="Reset 🔁"
          isButtonClick={false}
          clickHandler={resetCounter}
          />
      </div>

    </div>
  );
}

export default App;
