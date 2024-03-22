import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Images from "./components/Images.jsx";
import UserPicks from "./components/GameRules.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";

function Pokemon() {
  const [pickedPokemon, setPickedPokemon] = useState("");
  const [picksArray, setPicksArray] = useState([]);
  const [gameLost, setGameLost] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <React.StrictMode>
      <Images setPickedPokemon={setPickedPokemon} gameLost={gameLost} />
      <UserPicks
        pickedPokemon={pickedPokemon}
        picksArray={picksArray}
        setPicksArray={setPicksArray}
        setPickedPokemon={setPickedPokemon}
        gameLost={gameLost}
        setGameLost={setGameLost}
        score={score}
        setScore={setScore}
      />
      <ScoreBoard score={score} gameLost={gameLost} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Pokemon />);
