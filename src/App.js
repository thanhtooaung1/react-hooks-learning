import { useEffect, useState } from "react";
import "./App.css";
import UseMemoTest from "./UseMemoTest";

function App() {
  const [fruit, setFruit] = useState("Orange");
  const [count, setCount] = useState(0);

  const changeFruit = () => {
    setFruit(fruit === "Apple" ? "Orange" : "Apple");
  };

  const increaseThree = () => {
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
  };

  useEffect(() => {
    console.log("Calling api...");
  }, [fruit, count]);

  return (
    <>
      <UseMemoTest />
    </>
  );
}

export default App;
