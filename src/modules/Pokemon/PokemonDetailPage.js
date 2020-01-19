import React, { useEffect } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "./pokemon.slice";
import Pokemon from "./components/Pokemon";
import PokemonEvolutions from "./components/PokemonEvolutions";

const PokemonDetailPage = () => {
  const { pokemonName } = useParams();
  const dispatch = useDispatch();
  const { pokemonDetail } = useSelector(state => state.pokemonSlice);
  const pokemon = pokemonDetail[pokemonName];

  useEffect(() => {
    dispatch(pokemonSliceActions.detailPokemon(pokemonName));
  }, [pokemonName]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Pokemon pokemonName={pokemonName} />
      </Grid>
      <Grid item xs={12}>
        {pokemon ? (
          <PokemonEvolutions pokemonId={pokemon.id} />
        ) : (
          <LinearProgress />
        )}
      </Grid>
    </Grid>
  );
};
export default PokemonDetailPage;
