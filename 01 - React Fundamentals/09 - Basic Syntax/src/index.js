import React from 'react';
import { createRoot } from 'react-dom/client';

// "default" vrijednost za parametar:
function FriendlyGreeting({ name = 'there' }) {
  return (
    <p
      style={{
        fontSize: '1.25rem',
        textAlign: 'center',
        color: 'sienna',
      }}
    >
      Greetings, {name}!
    </p>
  );
}

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
    <div>
        <FriendlyGreeting name={"Lazar"}/>
        <FriendlyGreeting name={"Lazar2"}/>
        <FriendlyGreeting/>
    </div>
);