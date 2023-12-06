import React from "react";

// State updates in React are asynchronous.
//
// Now, let's imagine if state updates were synchronous.
//
// When the user clicks the button, the click handler would be called, and setUser(null) would run.
// React would immediately do the re-render, performing all of the steps we talked about.
// It calls the App function, gets the result, destroys the button, creates a paragraph.
//
// Only after all that, it resumes what it was doing in the onClick handler.
// And, immediately, another re-render is triggered for the status variable.
// And then, after all that, a third re-render for confirmationMessage.
//
// We'd be forcing react to do 3x the amount of work, which would take 3x as long.
// So, it would be a performance liability. But it would also lead to inconsistent / broken UI!
//
// For example: if we did a re-render after the first setUser call, user would be null,
// but confirmationMessage would still be undefined, since we haven't gotten there yet!
// As a result, we'd wind up with the following JSX:
//
// <p>{undefined}</p>
//
// Because state updates are asynchronous, they can be batched.
// React schedules the update, to take place as soon as the current work is completed
// (in practice, this is usually within a millisecond or two, so it feels completely instantaneous).
function App() {
  const [user, setUser] = React.useState({ name: "Alyssa" });
  const [status, setStatus] = React.useState("ready");
  const [confirmationMessage, setConfirmationMessage] = React.useState();

  if (!user) {
    return <p>{confirmationMessage}</p>;
  }

  return (
    <button
      onClick={() => {
        setUser(null);
        setStatus("initial");
        setConfirmationMessage("You have been logged out.");
      }}
    >
      Log Out
    </button>
  );
}

export default App;
