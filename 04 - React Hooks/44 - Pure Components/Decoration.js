import React from 'react';

function Decoration() {
  console.info('Decoration render');
  
  return (
    <div className="decoration">
      ⛵️
    </div>
  );
}

export default React.memo(Decoration);