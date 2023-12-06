import React from 'react';

import VisuallyHidden from './VisuallyHidden';

function ClickBallGame() {
  function handleBall() {
    window.alert("Win!")
  }

  function handleBomb() {
      window.alert("Lose!")
  }


  return (
    <div className="wrapper">
      <button
        className="ball"
        onClick={handleBall}
      >
        <VisuallyHidden>
          Ball
        </VisuallyHidden>
      </button>
      <button
        className="bomb"
        onClick={handleBomb}
      >
        <span
          role="img"
          aria-label="bomb"
        >
          💣
        </span>
      </button>
    </div>
  );
}

export default ClickBallGame;