import React from 'react';

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/contact';

function ContactForm() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const id = React.useId();
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        email,
        message,
      }),
    });
    const json = await response.json();
    console.log(json);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor={emailId}>Email</label>
        <input
          required={true}
          id={emailId}
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="row">
        <label htmlFor={messageId}>Message</label>
        <textarea
          required={true}
          id={messageId}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>
      <div className="button-row">
        <span className="button-spacer" />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;