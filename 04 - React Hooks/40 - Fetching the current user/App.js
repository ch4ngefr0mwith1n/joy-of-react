import React from 'react';
import useSWR from 'swr';

import UserCard from './UserCard.js';
import Spinner from './Spinner.js';

/*
  API INSTRUCTIONS
  
  This endpoint expects a GET request.
  
  To simulate an error, attach the following
  query parameter: `simulatedError=true`
*/

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/get-current-user';

function App() {
  return (
    <UserCard name="Name here" email="Email here" />
  );
}

export default App;