import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Collection from "./components/Collection";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
      );

      setNextUrl(res.data.next);

      setPrevUrl(res.data.previous);

      res.data.results.forEach(async (elem) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${elem.name}`
        );
        setPokemon((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  const nextPage = async () => {
    const res = await axios.get(nextUrl);
    setPokemon([]);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    res.data.results.forEach(async (elem) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${elem.name}`
      );
      setPokemon((p) => [...p, poke.data]);
    });
  };

  const prevPage = async () => {
    const res = await axios.get(prevUrl);
    setPokemon([]);
    setPrevUrl(res.data.previous);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (elem) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${elem.name}`
      );
      setPokemon((p) => [...p, poke.data]);
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        {prevUrl && (
          <button className="prev-btn" onClick={prevPage}>
            Précédent
          </button>
        )}
        <img className="logo" src="logo.png" alt="logo" />

        {nextUrl && (
          <button className="next-btn" onClick={nextPage}>
            Suivant
          </button>
        )}
      </div>

      <Collection pokemon={pokemon} />
    </div>
  );
}

export default App;
