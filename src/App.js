import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random() * 20 + 1));
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Start guessing...');
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(() => {
    const saved = localStorage.getItem('highscore');
    return saved ? parseInt(saved) : 0;
  });
  const [backgroundColor, setBackgroundColor] = useState('#222');
  const [numberWidth, setNumberWidth] = useState('15rem');
  const [showNumber, setShowNumber] = useState('?');

  const handleCheck = () => {
    const guessNum = Number(guess);
    
    if (!guess) {
      setMessage('⛔ No Number');
    }
    else if (guessNum > secretNumber) {
      if (score > 1) {
        setMessage('📈 Too High');
        setScore(score - 1);
      } else {
        setMessage('💥 You Lost The Game');
        setScore(0);
      }
    }
    else if (guessNum < secretNumber) {
      if (score > 1) {
        setMessage('📉 Too Low');
        setScore(score - 1);
      } else {
        setMessage('💥 You Lost The Game');
        setScore(0);
      }
    }
    else if (guessNum === secretNumber) {
      setMessage('🎉 Correct Number');
      setBackgroundColor('#60b347');
      setNumberWidth('30rem');
      setShowNumber(secretNumber);
      if (score > highscore) {
        setHighscore(score);
        localStorage.setItem('highscore', score.toString());
      }
    }
  };

  const handleAgain = () => {
    setSecretNumber(Math.trunc(Math.random() * 20 + 1));
    setGuess('');
    setMessage('Start guessing...');
    setScore(20);
    setBackgroundColor('#222');
    setNumberWidth('15rem');
    setShowNumber('?');
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleAgain}>Again!</button>
        <div className="number" style={{ width: numberWidth }}>{showNumber}</div>
      </header>
      <main>
        <section className="left">
          <input
            type="number"
            className="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            max="20"
            min="1"
          />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">💯 Score: <span className="score">{score}</span></p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
