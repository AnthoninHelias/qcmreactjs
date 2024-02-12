import React from 'react';
import logo from '../Ressources(image)/logo.svg';
import './App.css';
import ButtonClick from "../components/ButtonClick";
import InputClick from "../components/InputClick";



function App() {
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
        <ButtonClick children={'OK'} disabled={false}/>
        <InputClick value={''} onChange={() => {}} placeholder={''}/>


      </header>

    </div>
  );
}


export default App;
