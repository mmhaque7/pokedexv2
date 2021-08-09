import React from "react";
import PokemonList from "../Pokemon/PokemonList";
import { Col, Row, Container } from "react-bootstrap";
export default function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <PokemonList />
        </Col>
      </Row>
    </Container>
  );
}
