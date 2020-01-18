import React, { useEffect } from "react";
import Pokemon from "./Pokemon";
import { Grid, Button, LinearProgress } from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "../pokemon.slice";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemonList } = useSelector(state => state.pokemonSlice);

  useEffect(() => {
    dispatch(pokemonSliceActions.loadPokemonList(null));
  }, []);

  const next = () => {
    dispatch(pokemonSliceActions.loadPokemonList(pokemonList.next));
  };

  const previous = () => {
    dispatch(pokemonSliceActions.loadPokemonList(pokemonList.previous));
  };

  if (!pokemonList) {
    return <LinearProgress />;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {pokemonList.previous && (
          <Button variant="contained" color="primary" onClick={previous}>
            Anterior
          </Button>
        )}
        Total {pokemonList.total}
        {pokemonList.next && (
          <Button variant="contained" color="primary" onClick={next}>
            Próximos <ArrowForward />
          </Button>
        )}
      </Grid>
      {pokemonList.results &&
        pokemonList.results.map((pokemon, key) => (
          <Grid key={key} item xs={12} sm={6} md={3}>
            <Pokemon pokemonName={pokemon.name} />
          </Grid>
        ))}
    </Grid>
  );
};

export default PokemonList;
