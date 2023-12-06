import React from 'react';

function AddNewItemForm({ handleAddItem }) {
  const [label, setLabel] = React.useState('');

  return (
    <div className="new-list-item-form">
      <form onSubmit={(event) => {
        // obratiti pažnju na ovo, mora "prevent default", kako forma ne bi odradila "redirect"
        event.preventDefault();
        handleAddItem(label);

      }}
      >
        <label htmlFor="new-list-form-input">
          New item:
        </label>
        
        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            onChange={(event) => {
              setLabel(event.target.value);
            }}
          />
          <button>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;