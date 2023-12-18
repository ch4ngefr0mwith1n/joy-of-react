import React from 'react';

function MouseCoords() {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: 0, y: 0 });
  
  return (
    <div className="wrapper">
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default MouseCoords;