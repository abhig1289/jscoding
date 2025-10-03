import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{ color: 'white' }}>Count: {count}</p>
      <button onClick={() => setCount(prevCount=>prevCount + 1)}>Increase</button>
      <button onClick={() => {
        if(count>0){
        setCount(prevCount=>prevCount - 1)
        }
        }}>Decrease</button>
    </div>
  );
};

export default App;
