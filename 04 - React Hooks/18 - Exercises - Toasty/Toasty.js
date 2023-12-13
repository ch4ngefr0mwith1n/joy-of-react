import React from 'react';

import styles from './Toasty.module.css';

// Here's how we'd solve this problem using vanilla JS.
// Feel free to repurpose this in your solution!
function pureJsVersion() {
  const wrapperElement = document.querySelector('.toasty-wrapper');
  
  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      // Show character
    } else {
      // Hide character
    }
  });

  observer.observe(wrapperElement);
}

function Toasty() {
  // Your goal is to update the `isShown` state variable,
  // based on the user's scroll position, using
  // IntersectionObserver.
  const [isShown, setIsShown] = React.useState(false);
  
  // This CSS value will control whether the ghost is
  // visible or not.
  const translateX = isShown
    ? '0%'
    : '100%';
  
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.character}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  );
}

export default Toasty;