import axios from "axios";

import React, { useState, useEffect } from "react";
import { Row, Button, Col, Container } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPgURL, setcurrentPgURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=24"
  );
  const [nextPgURL, setnextPgURL] = useState("");
  const [prevPgURL, setprevPgURL] = useState("");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;

    async function fetchData() {
      const res = await axios.get(currentPgURL, {
        cancelToken: new axios.CancelToken((c) => {
          cancel = c;
        }),
      });

      setLoading(false);
      setnextPgURL(res.data.next);
      setprevPgURL(res.data.previous);
      setPokemon(res.data.results);
    }
    fetchData();
    return () => cancel();
  }, [currentPgURL]);

  if (Loading) return "Loading Pokemon....";

  function nextPage() {
    setcurrentPgURL(nextPgURL);
  }
  function prevPage() {
    setcurrentPgURL(prevPgURL);
  }
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="pokemon-list">
      <Container>
        <Row>
          {pokemon.map((pokemon, index) => {
            return (
              <Col>
                <PokemonCard
                  key={pokemon.index}
                  name={Capitalize(pokemon.name)}
                  imgName={pokemon.name}
                  url={pokemon.url}
                />
                <br />
              </Col>
            );
          })}

          <Button onClick={prevPage}>Back</Button>
          <Button onClick={nextPage}>Next</Button>
        </Row>
      </Container>
    </div>
  );
}
