import React from 'react';
import useSWR from 'swr';

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/get-temperature';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  
  return json;
}

function App() {
  const { data, error } = useSWR(ENDPOINT, fetcher);
  
  console.log(data, error);
  
  return (
    <p>
      Current temperature:
      {typeof data?.temperature === 'number' && (
        <span className="temperature">
          {data.temperature}°C
        </span>
      )}
    </p>
  );
}

export default App;