import React from 'react';

import useIsOnscreen from './hooks/use-is-onscreen.js';

function App() {
  const isOnscreen = useIsOnscreen();
  
  return (
    <>
      <header>
        Red box visible: {isOnscreen ? 'YES' : 'NO'}
      </header>
      <div className="wrapper">
        <div className="red box" />
      </div>
    </>
  );
}

export default App;