import React from 'react';
import { createRoot } from 'react-dom/client';

const testElement = (
    <div>
      <label htmlFor={name}>
        Name:
      </label>
      <input
          id={name}
          className={fun-input}
      />
    </div>
);

const paragraphsElement = (
    <div>
      <p>These paragraphs are valid.</p>
      <p>They include the closing tags.</p>
    </div>
);

const selfClosingTag = (
    <img
        alt = "a friendly kitten"
        src="images/kitten.jpg"
    />
);

const videoElement = (
    <video
      src="videos/skateboarding.mp4"
      autoPlay={true}
    />
);

// u običnom HTML-u, atribut "style" se koristi na sledeći način:
// <h1 style="font-size: 2rem;">
//   Hello World!
// </h1>

// međutim, u JSX-u "style" property uzima objekat:
const styledElement = (
    // spoljni set zagrada se odnosi na "expression slot", tj. na JavaScript izraz
    // unutrašnji set zagrada kreira JavaScript objekat, koji sadrži CSS deklaracije
    <h1 style={{ fontSize: '2rem' }}>
      Hello world!
    </h1>
);

// objekat koji sadrži CSS svojstva će biti u sledećoj formi:
const customStyles = {
  // svako CSS svojstvo će biti prebačeno iz "dash-case" u "camelCase":
  fontSize: '2rem',
  fontWeight: 'bold',
  paddingTop: 8, // za određena svojstva, automatski će se dodati "px" svojstvo
  width: '200px', // ne moramo da koristimo "unitless" svojstva, ali tada vrijednosti stavljamo eksplicitno u Stringove
};

// zbog toga su potrebne dvije vitičaste zagrade ukoliko direktno postavljamo vrijednosti:
const anotherStyledElement = (
    <h2 style={customStyles}>
      Another hello from me!
    </h2>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(videoElement);