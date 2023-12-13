import React from 'react';

import useToggle from './hooks/use-toggle'
import Clock from './Clock'

function App() {
  // TODO: Replace this with “useToggle”!
  const [
    showClock,
    setShowClock
  ] = React.useState(true);
  
  return (
    <>
      <button
        className="clock-toggle"
        onClick={() => setShowClock(!showClock)}
      >
        {showClock ? 'Clock ON' : 'Clock OFF'}
      </button>
      
      {showClock && <Clock />}
    </>
  );
}

export default App;