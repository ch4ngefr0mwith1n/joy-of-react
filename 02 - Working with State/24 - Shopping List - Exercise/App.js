import React from 'react';

import AddNewItemForm from './AddNewItemForm';

function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(label) {
      const newItem = {
          id: crypto.randomUUID(),
          label
      }

      const newItems = [...items, newItem];
      setItems(newItems);
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
            {items.map(({ id, label }) => (
                <li id={id}>{label}</li>
            ))}
        </ol>
      </div>
      <AddNewItemForm handleAddItem={handleAddItem}/>
    </div>
  );
}

export default App;