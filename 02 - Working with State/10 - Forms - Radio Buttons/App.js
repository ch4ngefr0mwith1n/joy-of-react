import React from 'react';

function App() {
  // po default-u, vrijednost će biti postavljena na "no":
  const [
    value,
    setValue
  ] = React.useState('no');

  return (
    <form>
      <fieldset>
        <legend>Do you agree?</legend>
        
        <input
          type="radio"
          // odnosi se na grupu "button"-a, jedna selektovana opcija će da odčekira drugu
          name="agreed-to-terms"
          // "id" se odnosi na "label", povezani su na taj način:
          id="agreed-yes"
          // svaki "button" ima svoju vrijednost
          // ovo svojstvo će biti kopirana u "state" ukoliko odaberemo ovaj "radio button"
          value="yes"
          // povezivanje sa React "state"-om:
          checked={value === "yes"}
          onChange={event => {
            setValue(event.target.value)
          }}
        />
        {' '}
        <label htmlFor="agreed-yes">
          Yes
        </label>
        <br />
        
        <input
          type="radio"
          name="agreed-to-terms"
          id="agreed-no"
          value="no"
          // povezivanje sa React "state"-om:
          checked={value === "no"}
          onChange={event => {
            setValue(event.target.value)
          }}
        />
        {' '}
        <label htmlFor="agreed-no">
          No
        </label>
      </fieldset>
    </form>
  );
}

export default App;