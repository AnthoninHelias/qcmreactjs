import React, { ChangeEvent, useState } from 'react';
import logo from '../Ressources(image)/logo.svg';
import './App.css';
import ButtonClick from "../components/ButtonClick";
import InputClick from "../components/InputClick";



function App() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonClick className='button' children={'OK'} disabled={false} />
        <InputClick
          type="text"
          title="name"
          className='input'
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Entrez un nom"
        />

      </header>
    </div>
  );
}

export default App;
