import React from 'react';

function App() {
  const [
    searchTerm,
    setSearchTerm,
  ] = React.useState('');

  // početna vrijednost -> { inputRef.current : undefined }
  const inputRef = React.useRef();

  // ukoliko ne postavimo vrijednost za "dependency array", "useEffect" će se izvršavati nakon svakog rendera
  // unutar "[]" stavljamo zavisnosti, čija izmjena trigger-uje izvršavanje "useEffect"-a
  // zbog toga ćemo za "dependency array" postaviti vrijednost "[]" i "useEffect" će se pozvati samo nakon inicijalnog render-a
  React.useEffect(() => {
      // "inputRef" može da nam posluži tek kada se izrenderuje komponenta
      inputRef.current.focus();
  }, []);


  return (
    <>
      <header>
        <img
          className="logo"
          alt="Foobar"
          src="https://sandpack-bundler.vercel.app/img/foogle.svg"
        />
      </header>
      <main>
        <form>
          <input
            ref={inputRef}
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button>Search</button>
        </form>
      </main>
    </>
  );
}

export default App;