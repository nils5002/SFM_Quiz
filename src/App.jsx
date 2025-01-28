import { useState } from "react";
import "./index.scss";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h2>Counter</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={()=>{setCount(count - 1)}}>-</button>
        <button className="plus" onClick={()=>{setCount(count + 1)}}>+</button>
      </div>
    </div>
  );
}
