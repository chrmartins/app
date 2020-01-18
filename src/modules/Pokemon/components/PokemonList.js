import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { Grid, Button, LinearProgress } from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "../pokemon.slice";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemonList } = useSelector(state => state.pokemonSlice);

  useEffect(() => {
    dispatch(pokemonSliceActions.loadPokemon());
  }, []);

  if (!pokemonList) {
    return <LinearProgress />;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Total {pokemonList.total}
        <Button
          variant="contained"
          color="primary"
          // onClick={() => requestPokemons(data.next)}
        >
          Próximos <ArrowForward />
        </Button>
      </Grid>
      {pokemonList.results &&
        pokemonList.results.map((pokemon, key) => (
          <Grid key={key} item xs={12} sm={6} md={3}>
            <Pokemon pokemonName={pokemon.name} pokemonUrl={pokemon.url} />
          </Grid>
        ))}
    </Grid>
  );
};

export default PokemonList;
