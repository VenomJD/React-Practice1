import { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <>
      <div className='app'>
        <textarea 
          id="htmlcode" 
          value={code} 
          onChange={handleCodeChange} 
          placeholder="Escribe tu código HTML aquí"
        />
        <iframe 
          srcDoc={code} 
          title="output"
        />
      </div>
    </>
  );
}

export default App;

