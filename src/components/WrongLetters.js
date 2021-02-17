import React from 'react';

const WrongLetters = ( {wrongLetters} ) => {
  return (
    <div className="wrong-letters-container">
      <div>
        { wrongLetters.length > 0 && <p>Wrong</p> }
        { wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>) 
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null) }
          {/* reduce is adding a comma between each <span> */}
      </div>
    </div> 
  )
}

export default WrongLetters;
