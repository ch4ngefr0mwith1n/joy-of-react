import React from 'react';

function Counter() {
    // const countArray = React.useState(0);
    // const count = countArray[0];
    // const setCount = countArray[1];
  const[count, setCount] = React.useState(0);

  return (
      <button onClick={() => setCount(count + 1)}>
          Value: {count}
      </button>
  );
}

export default Counter;