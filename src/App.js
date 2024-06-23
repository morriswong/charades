import React, { useState } from 'react';

const words = ["Elephant", "Pizza", "Skateboard", "Butterfly", "Telephone"];

function App() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isWordVisible, setIsWordVisible] = useState(true);

  const getNextWord = () => {
    const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return (
    <div style={{textAlign: 'center', padding: '20px'}}>
      <h1>Charades Game</h1>
      <h2>The word is...</h2>
      {isWordVisible ? (
        <p style={{fontSize: '24px', fontWeight: 'bold'}}>{currentWord}</p>
      ) : (
        <p style={{fontSize: '24px', fontWeight: 'bold'}}>[Hidden]</p>
      )}
      <button onClick={() => setIsWordVisible(!isWordVisible)}>
        {isWordVisible ? 'Hide' : 'Show'} Word
      </button>
      <button onClick={getNextWord}>Next Word</button>
    </div>
  );
}

export default App;