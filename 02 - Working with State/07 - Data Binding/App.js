import React from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("cats");

    // The value attribute works differently in React than it does in HTML.
    // In HTML, value sets the default value, and can be edited.
    // In React, value locks the input to the specified value, and it becomes read-only.
    //
    // By setting value equal to our searchTerm state variable, we ensure that the input will always display the search term.
    //
    // Let's add a button that sets the search term to a random number.
    // We see that by clicking this button, the input will be updated to show this new value.
    //
    // Essentially, our data binding is 50% complete.
    // The input will always show the value of the searchTerm state, even when that value is updated, but the state can't be changed by the input.
    // The binding is only one way.
    //
    // When we add an onChange handler, we see that the input actually does briefly update to show the new value.
    // The problem is that React will undo that change immediately after the change event fires,
    // before the browser has even had the time to complete a single repaint.
    //
    // We can call setSearchTerm with the input's current value as a way to persist that edit.
    // When React re-renders, the input will be updated to show the updated value held in state.
    //
    // Do we really need value? It seems to work with just the onChange listener!
    // Well, this is also a one-way data binding, but it's the opposite of the situation we saw before. The input can update the state, but the state can't update the input. If we click our random number generator button, the state is updated to a new number, but the input doesn't update to show this new value.
    // Similarly, if our state has an initial value like cats, we won't see that initial value unless we control the input by setting value={searchTerm}.
    return (
      <>
        <form>
            <label htmlFor="search-input">
                Search:
            </label>
            <input
                type="text"
                id="search-input"
                value={searchTerm}
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
            />
        </form>
          <p>Search term: {searchTerm}</p>
      </>
    );
}

export default SearchForm;
