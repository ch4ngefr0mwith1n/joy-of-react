// 1. Import za "dependencies":
import React from 'react';
import {createRoot} from 'react-dom/client';

// 2. Kreiranje React elementa:
const element = React.createElement(
    // tip elementa:
    'p',
    // "properties" unutar elementa:
    {id: 'hello'},
    // sadržaj unutar elementa, odnosno njegovi potomci:
    'Hello World!'
);

// 3. Renderovanje aplikacije:
// pravi se referenca na već postojeći DOM objekat ("<div id="root"></div>" iz "index.html")
// kada se aplikacije renderuje, DOM elementi će se kreirati i dodavati u ovaj "container"
const container = document.querySelector('#root');
// ovaj element će biti "root" naše aplikacije
const root = createRoot(container);
// "render" funkcija uzima React elemente i pretvara ih u DOM čvorove
root.render(element);
// <p id="hello">
//   Hello World!
// </p>

