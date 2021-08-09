import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function PokemonCard(props) {
  const [name, setname] = useState("");
  const [url, seturl] = useState("");
  const [pokemonIndex, setpokemonIndex] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [imgName, setimgName] = useState("");

  useEffect(() => {
    setname(props.name);
    seturl(props.url);
    setpokemonIndex(url.split("/")[6]);
    setimgName(props.imgName);
    setimgUrl(`https://img.pokemondb.net/sprites/bank/normal/${imgName}.png`);
  }, [
    props.name,
    props.url,
    pokemonIndex,
    url,
    imgUrl,
    name,
    props.imgName,
    imgName,
  ]);

  return (
    <>
      <br />
      <Container fluid>
        <Row>
          <Col md={3} sm={1} mb={5}>
            <Link to={`pokemon/${pokemonIndex}`}>
              <Card border="secondary" style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={imgUrl}
                    style={{ width: "8rem" }}
                  />
                  <Card.Title>{name}</Card.Title>
                  <Card.Subtitle>{pokemonIndex}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
