import React from 'react';
import { createRoot } from 'react-dom/client';

//// Stari način:
// const element = React.createElement(
//   'p',
//   {
//     id: 'hello',
//   },
//   'Hello World!'
// );

// Novi način:
// sav JSX kod koji napišemo se konvertuje u JavaScript kod i pozive "React.createElement" funkcije
// ovaj proces pretvaranja se naziva "transpiling"
// JSX kod može da se nalazi unutar ".js" fajla, ne moramo eksplicitno da stavljamo ".jsx" ekstenziju
const element = (
    <p id={"hello"}>
        Hello World!
    </p>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(container);