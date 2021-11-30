import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div className="yellow-backgroung">
      <button onClick={countUp}>+</button>
      <p>{count}</p>
      {count > 0 && <button onClick={countDown}>-</button>}
    </div>
  );
};

export default Counter;