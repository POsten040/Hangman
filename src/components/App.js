import React, { useState } from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import './../App.css';

const words = []

function App() {
  const [playable, setPlayable] = useState(true);

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
      </div>
    </>
  );
} 

export default App;
