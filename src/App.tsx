import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFindUserQuery } from './generated/graphql-hooks';

interface AppProps {}

function App({}: AppProps) {
  const { loading, error, data } = useFindUserQuery({
    variables: {
      userId: '1234',
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data?.user?.id}</p>
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
