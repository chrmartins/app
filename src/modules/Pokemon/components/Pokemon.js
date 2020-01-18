import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Button,
  Link
} from "@material-ui/core";

const Pokemon = ({ pokemonName, pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(async () => {
    const resposta = await fetch(pokemonUrl);
    const json = await resposta.json();
    setPokemon({
      name: json.name,
      imageSrc: json.sprites.front_default
    });
  }, []);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={pokemon.imageSrc} />}
        title={pokemon.name}
      />
      <CardContent>Aqui vai os detalhes</CardContent>
    </Card>
  );
};

export default Pokemon;
