import React, { useEffect, useState } from "react";

export default function UserPicks({
  pickedPokemon,
  picksArray,
  setPicksArray,
  setPickedPokemon,
  gameLost,
  setGameLost,
  score,
  setScore,
  setGameWon,
  gameWon,
}) {
  const gameReset = () => {
    setGameLost(false);
    setGameWon(false);
    setScore(0);
    setPicksArray([]);
    setPickedPokemon("");
  };

  useEffect(() => {
    if (pickedPokemon !== "") {
      setScore((prevScore) => prevScore + 1);

      setPicksArray((prevArray) => [...prevArray, pickedPokemon]);

      setPickedPokemon("");
    }
  }, [pickedPokemon, setPicksArray, setPickedPokemon]);

  // Effect for checking duplicates in picksArray
  useEffect(() => {
    if (picksArray.length > 1) {
      const lastIndex = picksArray.length - 1;
      const lastPickedPokemon = picksArray[lastIndex];
      const duplicateIndex = picksArray.findIndex(
        (pokemon, index) => index < lastIndex && pokemon === lastPickedPokemon,
      );

      if (duplicateIndex !== -1) {
        console.log("Lost the game");
        setScore((prevScore) => prevScore - 1);
        setGameLost(true); // Set gameLost to true if a duplicate is found
      }

      if (score === 6) {
        setScore(score);
        setGameWon(true);
      }
    }
  }, [picksArray]);

  return (
    <div className="current score">
      <h1>Score is: {score}</h1>

      {gameLost && (
        <div className="gameOver">
          <h1>You've Lost the Game</h1>
          <button type="button" className="gameOverButton" onClick={gameReset}>
            Replay
          </button>
        </div>
      )}

      {gameWon && (
        <div className="gameOver">
          <h1>Congratulations, you win!</h1>
          <button type="button" className="gameOverButton" onClick={gameReset}>
            Replay
          </button>
        </div>
      )}
    </div>
  );
}
