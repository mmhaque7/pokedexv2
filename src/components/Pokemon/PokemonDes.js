import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PokemonDes(props) {
  const [genOne, setgenOne] = useState([]);
  const [genTwo, setgenTwo] = useState("");
  const [genThree, setgenThree] = useState("");
  const [genFour, setgenFour] = useState("");
  const [genFive, setgenFive] = useState("");
  const [genSix, setgenSix] = useState("");
  const [genSeven, setgenSeven] = useState("");
  const [genEight, setgenEight] = useState("");
  const params = useParams();
  const [url, seturl] = useState(
    `https://pokeapi.co/api/v2/pokemon-species/${params.pokemonIndex}`
  );

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function fetchData() {
      const res = await axios.get(url, { cancelToken: source.token });
      //set gen one
      setgenOne(
        res.data.flavor_text_entries.map((eng) => {
          if (eng.language.name === "en") {
            if (eng.version.name === "red") {
              return eng.flavor_text;
            }
          }
        })
      );

      //set gen two
      setgenTwo(
        res.data.flavor_text_entries.map((eng) => {
          if (eng.language.name === "en") {
            if (eng.version.name === "gold") {
              return eng.flavor_text;
            }
          }
        })
      );

      //set gen three
      setgenThree(
        res.data.flavor_text_entries.map((eng) => {
          if (eng.language.name === "en") {
            if (eng.version.name === "ruby") {
              return eng.flavor_text;
            }
          }
        })
      );

      //set gen four
      setgenFour(
        res.data.flavor_text_entries.map((eng) => {
          if (eng.language.name === "en") {
            if (eng.version.name === "pearl") {
              return eng.flavor_text;
            }
          }
        })
      );
    }

    fetchData();
    return () => source.cancel();
  }, [url]);

  return (
    <div>
      <p>{genOne}</p>
      <p>{genTwo}</p>
    </div>
  );
}
