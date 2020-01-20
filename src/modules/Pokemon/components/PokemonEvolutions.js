import React, { useEffect, Fragment } from "react";
import PokemonCard from "./PokemonCard";
import { Grid, Button, LinearProgress, Typography } from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "../pokemon.slice";

const PokemonEvolutions = ({ pokemonName }) => {
  const dispatch = useDispatch();
  const { evolutionDetail } = useSelector(state => state.pokemonSlice);
  const evolution = evolutionDetail[pokemonName];

  const createEvolutions = evolves_to => {
    return evolves_to && evolution ? (
      <Fragment>
        <PokemonCard pokemonName={evolves_to.name} />
        {evolves_to.evolves_to && createEvolutions(evolves_to.evolves_to)}
      </Fragment>
    ) : (
      <Typography>Não evolui</Typography>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Evoluções:
      </Grid>
      <Grid item xs={12}>
        {evolution ? (
          createEvolutions(evolution.evolves_to)
        ) : (
          <LinearProgress />
        )}
      </Grid>
    </Grid>
  );
};

export default PokemonEvolutions;
