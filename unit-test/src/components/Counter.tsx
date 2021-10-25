import React, { useState } from 'react';

type Props = any;

const Counter = (props: Props) => {
  const [counter, setCounter] = useState(0);
  const [switchButton, setSwitchButton] = useState<boolean>(true);

  const increaseCount = () => setCounter(counter + 1);
  const decreaseCount = () => setCounter(counter - 1);
  const handleSwitchButton = () => setSwitchButton(!switchButton);

  return (
    <>
      <h1>Counter</h1>
      <div className="buttons">
        <button data-testid="plus-button" disabled={!switchButton} onClick={increaseCount}>
          +
        </button>
        <button data-testid="minus-button" disabled={!switchButton} onClick={decreaseCount}>
          -
        </button>
      </div>

      <span data-testid="counter">{counter}</span>

      <button style={{ backgroundColor: 'blue' }} data-testid="switch-button" onClick={handleSwitchButton}>
        {switchButton ? 'on' : 'off'}
      </button>
    </>
  );
};

export default Counter;
