import React from "react";

const Counter = () => {
  const [number, setNumber] = React.useState(0);
  const onIncrease = React.useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  const onDecrease = React.useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
