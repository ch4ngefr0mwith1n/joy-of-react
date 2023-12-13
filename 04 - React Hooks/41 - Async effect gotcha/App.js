import React from 'react';

const ENDPOINT = 'https://jor-test-api.vercel.app/api/get-temperature';

function App() {
  const [temperature, setTemperature] = React.useState(null);

  React.useEffect(async () => {
    const response = await fetch(ENDPOINT);
    const json = await response.json();

    setTemperature(json.temperature);
  }, []);

  return (
    <p>
      Current temperature:
      {typeof temperature === 'number' && (
        <span className="temperature">
          {temperature}°C
        </span>
      )}
    </p>
  );
}

export default App;