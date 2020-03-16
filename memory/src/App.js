import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<title>My first styled page</title>
        <p>
          List of Bib restaurant scrap from michelin website
        </p>
        <a
          className="michelin_link"
          href="https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/"
          target="_blank"
          rel="noopener noreferrer"
        >
          discover website
        </a>
      </header>
	  <body className="body">
		<p>
          List of restaurant : 
        </p>
	  </body>
    </div>
  );
}

export default App;

