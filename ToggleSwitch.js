import React, { useState } from 'react';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? 'Off' : 'On'}</button>
    </div>
  );
};

export default App;
