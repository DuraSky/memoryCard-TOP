import React, { useEffect, useState } from "react";

export default function ScoreBoard({ score, gameLost }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (score > highScore && gameLost === true) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div className="high score">
      <h1>High Score: {highScore}</h1>
    </div>
  );
}
