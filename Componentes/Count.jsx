import { useState } from "react";
import style from "./Count.module.css";

function Count() {
  const [incValue, setIncValue] = useState(0);
  const [decValue, setDecValue] = useState(0);

  const increment = () => {
    setIncValue(incValue + 1);
  };

  const decrement = () => {
    setDecValue(decValue - 1);
  };

  const reset = () => {
    setIncValue(0);
    setDecValue(0);
  };

  return (
    <div className={style.div}>
      <center>
        <h1>COUNTER APP</h1>
        <button onClick={increment}>{incValue}</button>
        <button onClick={decrement}>{decValue}</button>
        <button onClick={reset}>Reset</button>
      </center>

      <center>
        <p>Now The Current Increment Value Is: {incValue}</p>
        <p>Now The Current Decrement Value Is: {decValue}</p>
      </center>
    </div>
  );
}

export default Count;
