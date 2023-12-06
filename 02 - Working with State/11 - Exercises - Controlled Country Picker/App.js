import React from 'react';

import { COUNTRIES } from './data';

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

function App() {
  const [
    country,
    setCountry,
  ] = React.useState('');

  const countryNames = Object.entries(COUNTRIES);

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">
          Country:
        </label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={event => {
              setCountry(event.target.value);
          }}
        >
            {/*početna opcija*/}
            <option value="">— Select Country —</option>
            <optgroup label="Countries">
                {/*iteracija preko mape*/}
                {countryNames.map(([key, value]) => {
                    // mora "return" da se odradi:
                    return (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    );
                })}
            </optgroup>
        </select>
      </fieldset>

      <p className="country-display">
        Selected country: {country}
      </p>

      <button>Submit</button>
    </form>
  );
}

export default App;