import React, { useEffect, useState } from "react";
import { getPokemons } from "./api";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { results } = await getPokemons();
        setPokemons(results);
      } catch (e) {
        console.error(e);
      }
    };

    fetch();
  }, []);

  return (
    <ul className="App">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
