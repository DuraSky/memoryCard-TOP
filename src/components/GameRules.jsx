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
}) {
  const gameReset = () => {
    setGameLost(false);
    setScore(0);
    setPicksArray([]);
    setPickedPokemon("");
  };

  // Effect for handling the first user click
  useEffect(() => {
    if (pickedPokemon !== "") {
      // Increment the score for the first user click
      setScore((prevScore) => prevScore + 1);

      // Update the picksArray with the pickedPokemon
      setPicksArray((prevArray) => [...prevArray, pickedPokemon]);

      // Reset pickedPokemon after updating the picksArray
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
    }
  }, [picksArray]);

  return (
    <div className="current score">
      <h1>Score is: {score}</h1>

      {gameLost === true && (
        <div>
          <h1>Youve Lost the Game</h1>
          <button type="button" onClick={() => gameReset()}>
            Replay
          </button>
        </div>
      )}
    </div>
  );
}
