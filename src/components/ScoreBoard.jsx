import React, { useEffect, useState } from "react";

export default function ScoreBoard({ score, gameLost, gameWon }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    // Update high score if game is won or if game is lost and current score is higher
    if (gameWon || (gameLost && score > highScore)) {
      setHighScore(score);
    }
  }, [score, highScore, gameLost, gameWon]);

  return (
    <div className="high score">
      <h1>High Score: {highScore}</h1>
    </div>
  );
}
