import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.querySelector('#root')
);

function Button({text, color, borderColor}) {
    return (
        <button
            style={{
                border: '2px solid',
                // "property value shorthand" pristup:
                // color,
                // borderColor,
                color: color,
                borderColor: borderColor,
                background: 'white',
                borderRadius: 4,
                padding: 16,
                margin: 8,
            }}
        >
            {text}
        </button>
    );
}

root.render(
  <div>
      <Button
          text={"Cancel"}
          color={"red"}
          borderColor={"white"}
      />
      <Button
          text={"Confirm"}
          color={"black"}
          borderColor={"black"}
      />
  </div>
);