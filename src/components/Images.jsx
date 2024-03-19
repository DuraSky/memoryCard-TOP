import React, { useEffect, useState } from "react";

export default function Images() {
  const [pokemonImages, setPokemonImages] = useState({});

  const getName = (name) => {
    return console.log(name.name);
  };

  useEffect(() => {
    const pokemonNames = [
      "charizard",
      "pikachu",
      "bulbasaur",
      "raichu",
      "squirtle",
      "eevee",
    ];

    const fetchPokemonImages = async () => {
      const images = {};
      for (const name of pokemonNames) {
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

    fetchPokemonImages();
  }, []);

  return (
    <div>
      {Object.keys(pokemonImages).map((name) => (
        <img
          key={name}
          src={pokemonImages[name]}
          alt={name}
          width="150px"
          onClick={() => getName({ name })}
        />
      ))}
    </div>
  );
}
