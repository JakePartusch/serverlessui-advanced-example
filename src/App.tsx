import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import type { ProxyResponse } from '../functions/hello';

interface AppProps {}

function App({}: AppProps) {
  const [data, setData] = useState('');

  const fetchData = async () => {
    const response: ProxyResponse = await (await fetch('/api/hello')).json();
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Stuff
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
