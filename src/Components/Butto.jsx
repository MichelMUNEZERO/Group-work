import React, { useState } from 'react';

const Butto = () => {
  const [isCount, setCount] = useState(0);

  const increment = () => setCount(isCount + 1);
  const decrement = () => setCount(isCount - 1);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Counter</h1>
      <h2>{isCount}</h2>
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Butto;