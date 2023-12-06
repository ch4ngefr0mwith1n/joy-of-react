import React from 'react';
import { createRoot } from 'react-dom/client';

const shoppingList = ['apple', 'banana', 'carrot'];

// BITNO:
// kada se odradi "transpile", izvršiće se samo konverzija iz JSX koda u JavaScript
// taj kod će se pokrenuti tek unutar browsera, kada se procesuira JavaScript

// sve što se nalazi unutar "(...)" zagrada je statički string
// sve što se nalazi unutar "{...}" zagrada je izraz
const element = (
    <div>
        {/* primjer za komentar */}
        Items left for purchase: ${shoppingList.length}
    </div>
);

// ekvivalent gornjeg koda:
const compiledElement = React.createElement(
  'div',
  {},
  'Items left to purchase: ',
  shoppingList.length
);

// ---------------------------------------------------------------------------------------------------------------------
const uniqueID = 'content-wrapper';

const anotherElement = (
    <main id={uniqueID}>
        Hello world!
    </main>
);

// ekvivalent ovog primjera:
const compiledAnotherElement = React.createElement(
    'main',
    {
        id: "content-wrapper",
    },
    'Hello World'
);
// ---------------------------------------------------------------------------------------------------------------------

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);