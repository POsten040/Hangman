import React, { useState, useEffect } from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import './../App.css';

const words = ['thesaurus', 'dictionary', 'school', 'detention'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
        {console.log(selectedWord)}
        {console.log(correctLetters)}

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if(playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if(selectedWord.includes(letter)) {
          if(!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            // show(setShowNotifiction);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]); // Whenever one of these dependiencies are updated, it will inact the removeEventListener function. //

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={ wrongLetters }/>
        <WrongLetters wrongLetters = {wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
} 

export default App;
