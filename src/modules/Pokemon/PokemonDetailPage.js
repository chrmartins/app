import React, { useEffect } from "react";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "./pokemon.slice";
import PokemonCard from "./components/PokemonCard";
import PokemonEvolutions from "./components/PokemonEvolutions";

const PokemonDetailPage = () => {
  const { pokemonName } = useParams();
  const dispatch = useDispatch();
  const { pokemonDetail } = useSelector(state => state.pokemonSlice);
  const pokemon = pokemonDetail[pokemonName];

  useEffect(() => {
    dispatch(pokemonSliceActions.loadPokemonDetail(pokemonName));
  }, [pokemonName]);

  if (!pokemon) {
    return <LinearProgress />;
  }

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item xs={12} md={4}>
        <PokemonCard pokemonName={pokemonName} showActions={false}>
          <Grid container justify="center" spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5" color="secondary">
                Experiência
              </Typography>
              <Typography variant="body1">{pokemon.base_experience}</Typography>
            </Grid>
          </Grid>
        </PokemonCard>
      </Grid>
      <Grid item xs={12}>
        <PokemonEvolutions pokemonName={pokemonName} />
      </Grid>
    </Grid>
  );
};
export default PokemonDetailPage;
