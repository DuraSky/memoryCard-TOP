import React, { useEffect, useState } from "react";
import UserPicks from "./GameRules";

export default function Images({ setPickedPokemon, gameLost }) {
  const [pokemonImages, setPokemonImages] = useState({});
  const [shuffledNames, setShuffledNames] = useState([]);

  const getNameAndShuffle = ({ name }) => {
    console.log(name);
    setPickedPokemon(name);
    shuffle(pokemonNames); // Call shuffle function here
  };

  const pokemonNames = [
    "charizard",
    "pikachu",
    "bulbasaur",
    "raichu",
    "squirtle",
    "eevee",
  ];

  const shuffle = (array) => {
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);
    setShuffledNames(shuffledArray);
  };

  useEffect(() => {
    shuffle(pokemonNames); // Initial shuffle when component mounts
  }, []);

  useEffect(() => {
    const fetchPokemonImages = async () => {
      const images = {};
      for (const name of shuffledNames) {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`,
          );
          const data = await response.json();
          images[name] = data.sprites.front_default;
        } catch (error) {
          console.error(`Error fetching ${name} image:`, error);
        }
      }
      setPokemonImages(images);
    };

    if (shuffledNames.length > 0) {
      fetchPokemonImages();
    }
  }, [shuffledNames]);

  return (
    <div className="pokeCards">
      {Object.keys(pokemonImages).map((name) => (
        <img
          key={name}
          src={pokemonImages[name]}
          alt={name}
          width="150px"
          onClick={() => {
            if (gameLost === false) getNameAndShuffle({ name });
          }}
        />
      ))}
    </div>
  );
}
