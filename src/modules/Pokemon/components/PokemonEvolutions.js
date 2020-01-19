import React, { useEffect, Fragment } from "react";
import PokemonCard from "./PokemonCard";
import { Grid, Button, LinearProgress } from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "../pokemon.slice";

const PokemonEvolutions = ({ pokemonName }) => {
  const dispatch = useDispatch();
  const { evolutionDetail } = useSelector(state => state.pokemonSlice);
  const evolution = evolutionDetail[pokemonName];
  console.log("evolution", evolution);

  const createEvolutions = evolves_to => {
    return evolves_to.map((evolution, key) => (
      <Fragment key={key}>
        <PokemonCard pokemonName={evolution.species.name} />
        {evolution.evolves_to && createEvolutions(evolution.evolves_to)}
      </Fragment>
    ));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Evoluções:
      </Grid>
      {evolution ? (
        <Grid item xs={12}>
          {evolution ? (
            createEvolutions(evolution.chain.evolves_to)
          ) : (
            <LinearProgress />
          )}
        </Grid>
      ) : (
        <Grid item xs={12}>
          Não é possível mostrar as evoluções
        </Grid>
      )}
    </Grid>
  );
};

export default PokemonEvolutions;
