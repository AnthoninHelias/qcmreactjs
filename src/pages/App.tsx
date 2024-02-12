import React, { ChangeEvent, useState } from 'react';
import logo from '../Ressources(image)/logo.svg';
import './App.css';
import ButtonClick from "../components/ButtonClick";
import InputClick from "../components/InputClick";

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [displayedText, setDisplayedText] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedText(inputValue);
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
        <ButtonClick className='button' onClick={handleButtonClick} disabled={false} submit={true}>
          OK
        </ButtonClick>
        <InputClick
          type="text"
          title="name"
          className='input'
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Entrez un nom"
        />
        <p>{displayedText}</p>
      </header>
    </div>
  );
}

export default App;
