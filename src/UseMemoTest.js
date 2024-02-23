import React, { useMemo, useState } from "react";

const UseMemoTest = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseCount1 = () => {
    setCount1(count1 + 1);
  };

  const increaseCount2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="App">
      <h5>
        Count 1 is {count1} {isEven ? "Even" : "Odd"}
      </h5>
      <button onClick={increaseCount1}>Increase Count 1</button>
      <h5>Count 2 is {count2}</h5>
      <button onClick={increaseCount2}>Increase Count 2</button>
    </div>
  );
};

export default UseMemoTest;
