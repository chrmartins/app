import React from "react";
import PokemonCard from "./PokemonCard";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const PokemonEvolutions = ({ pokemonName }) => {
  const dispatch = useDispatch();
  const { evolutionDetail } = useSelector(state => state.pokemonSlice);
  const evolution = evolutionDetail[pokemonName];

  const createEvolutions = evolves_to => {
    return evolves_to && evolution ? (
      <>
        <Grid item xs={12} md={4}>
          <PokemonCard pokemonName={evolves_to.name} />
        </Grid>
        {evolves_to.evolves_to && createEvolutions(evolves_to.evolves_to)}
      </>
    ) : (
      <Typography>Não evolui</Typography>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Evoluções</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          {evolution ? (
            createEvolutions(evolution.evolves_to)
          ) : (
            <LinearProgress />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PokemonEvolutions;
