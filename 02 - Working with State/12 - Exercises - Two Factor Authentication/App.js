import React from 'react';

const CORRECT_CODE = '123456';

function TwoFactor() {
  const [code, setCode] = React.useState('');

  function handleSubmit(event) {
      event.preventDefault();

      const isCorrect = code === CORRECT_CODE;
      window.alert(isCorrect ? 'Correct!' : 'Incorrect!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="auth-code">
        Enter authorization code:
      </label>
      <div className="row">
        <input
          id="auth-code"
          type="text"
          required={true}
          maxLength={6}
          onChange={(event) => {
              setCode(event.target.value)
          }}
        />
        <button>Validate</button>
      </div>
    </form>
  );
}

export default TwoFactor;