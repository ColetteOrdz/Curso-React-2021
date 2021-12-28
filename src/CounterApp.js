import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        //setCounter(counter + 1) //no se puede usar "counter++"
        setCounter((c) => c + 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      {/* <button onClick={() => setCounter(value))}>Reset</button> */}
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
