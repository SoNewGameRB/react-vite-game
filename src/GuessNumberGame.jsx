import React, { useState } from 'react';

const GuessNumberGame = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('請輸入一個有效的數字');
      return;
    }
    if (userGuess < number) {
      setMessage('太小了！');
    } else if (userGuess > number) {
      setMessage('太大了！');
    } else {
      setMessage('恭喜你猜對了！');
    }
  };

  const handleReset = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>猜數字遊戲</h1>
      <p>請猜一個 1 到 100 之間的數字：</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleChange}
          placeholder="輸入你的猜測"
        />
        <button type="submit">猜測</button>
      </form>
      <p>{message}</p>
      <button onClick={handleReset}>重置遊戲</button>
    </div>
  );
};

export default GuessNumberGame;
