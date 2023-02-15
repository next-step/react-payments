import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';

function App() {
  return (
    <div className="App">
      <Div>
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
        </header>
      </Div>
    </div>
  );
}

export default App;

const Div = styled.div`
  color: red;
  background-color: blue;
`;
