import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const disptach = useDispatch();

  const decrement = () => {
    disptach({ type: "DEC" });
  };

  const increment = () => {
    disptach({ type: "INC" });
  };

  const addBy = () => {
    disptach({ type: "ADD", payload: 10 });
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
