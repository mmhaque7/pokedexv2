import React from "react";
import { Navbar as BootNav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <BootNav bg="pokeNav" variant="dark">
      <Container fluid>
        <BootNav.Brand>
          <Link to="/">Pokedex</Link>
        </BootNav.Brand>
      </Container>
    </BootNav>
  );
}
