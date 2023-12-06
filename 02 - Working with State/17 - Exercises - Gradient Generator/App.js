import React from 'react';
function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
  ]);
  
  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function handleAdding() {
    if(colors.length === 5) {
        window.alert('There is a maximum of 5 colors');
        return;
    }

    const newColors = [...colors];
    newColors.push("#FF0000");
    setColors(newColors);
  }

  function handleRemoving() {
      if(colors.length === 2) {
          window.alert('There is a minimum of 2 colors');
          return;
      }

      const newColors = [...colors];
      newColors.pop();
      setColors(newColors);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={handleRemoving}>
          Remove color
        </button>
        <button onClick={handleAdding}>
          Add color
        </button>
      </div>
      
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />
      
      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  // vrijednost koja se vadi prilikom mapiranja:
                  value={color}
                  onChange={(event) => {
                      const nextColors = [...colors];
                      nextColors[index] = event.target.value;

                      setColors(nextColors);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;