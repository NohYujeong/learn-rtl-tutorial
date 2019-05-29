import * as React from "react";

const DelayedToggle = () => {
  const [toggle, setToggle] = React.useState(false);

  const onToggle = React.useCallback(() => {
    setTimeout(() => {
      setToggle(toggle => !toggle);
    }, 1000);
  }, []);

  return (
    <div>
      <button onClick={onToggle}>토글</button>
      <div>
        상태: <span>{toggle ? "ON" : "OFF"}</span>
      </div>
      {toggle && <div>야호!!</div>}
    </div>
  );
};

export default DelayedToggle;
