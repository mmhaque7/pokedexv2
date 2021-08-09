import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PokemonDes from "./PokemonDes";

export default function Pokemon(props) {
  const [pokeName, setpokeName] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [exp, setexp] = useState("");

  const params = useParams();
  const [url, seturl] = useState(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonIndex}/`
  );

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url);
      setpokeName(res.data.name);
      setimgURL(
        `https://img.pokemondb.net/sprites/bank/normal/${res.data.name}.png`
      );
      setexp(res.data.base_experience);

      setAbilities(
        res.data.abilities.map((abil) => {
          return abil.ability.name
            .toLowerCase()
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        })
      );
    }

    fetchData();
  });

  function showAbbilities() {
    return abilities.map((item, index) => <p key={index}>{item}</p>);
  }

  return (
    <Container>
      <p>{pokeName}</p>
      <img src={imgURL} />
      <p>{exp}</p>
      {showAbbilities()}
      <PokemonDes />
    </Container>
  );
}
