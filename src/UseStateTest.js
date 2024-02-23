import React from "react";

const UseStateTest = () => {
  return (
    <>
      <div className="App">
        <h3>{fruit}</h3>
        <button onClick={changeFruit}>Change Fruit</button>
      </div>
      <div className="App">
        <h3>Counter</h3>
        <h5>Count - {count}</h5>
        <button onClick={increaseThree}>Increase 3</button>
      </div>
    </>
  );
};

export default UseStateTest;
