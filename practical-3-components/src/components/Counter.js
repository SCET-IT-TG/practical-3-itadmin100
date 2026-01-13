import React, { useState } from 'react';

const Counter = () => {
  // 1. Initialize state to 0
  const [count, setCount] = useState(0);

  // 2. Create helper functions for clarity
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Counter Component</h2>
      
      {/* 3. Display the current count */}
      <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>{count}</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        {/* 4. Button to Decrement */}
        <button 
          onClick={handleDecrement}
          style={{ padding: '10px 20px', backgroundColor: '#e53935', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Decrement
        </button>

        {/* 5. Button to Increment */}
        <button 
          onClick={handleIncrement}
          style={{ padding: '10px 20px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;