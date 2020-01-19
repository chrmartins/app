import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Grid, Button, LinearProgress, MobileStepper } from "@material-ui/core";
import {
  ArrowForward,
  ArrowBack,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "../pokemon.slice";
import { POKEMON_ID_BY_NAME } from "../pokemon.constant";
import PaginationComponent from "../../../components/PaginationComponent";

const PokemonList = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);
  const pokemonList = Object.values(POKEMON_ID_BY_NAME);
  const totalPages = pokemonList.length / limit;

  const pokemonListPaginated = pokemonList.slice(page, page + limit);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleBack = () => {
    setPage(page - 1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Busca
      </Grid>
      <PaginationComponent
        totalPages={totalPages}
        page={page}
        handleNext={handleNext}
        handleBack={handleBack}
      />
      {pokemonListPaginated.map((pokemon, key) => (
        <Grid key={key} item xs={12} sm={6} md={3}>
          <PokemonCard pokemonName={pokemon.name} />
        </Grid>
      ))}
      <PaginationComponent
        totalPages={totalPages}
        page={page}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Grid>
  );
};

export default PokemonList;
