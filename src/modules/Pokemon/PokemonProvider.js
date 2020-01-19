import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, LinearProgress } from "@material-ui/core";
import { pokemonSliceActions } from "./pokemon.slice";

const PokemonProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { evolutionList, evolutionDetail } = useSelector(
    state => state.pokemonSlice
  );
  const evolutionTotal = evolutionList ? evolutionList.length : 0;
  const evolutionDetailTotal = Object.values(evolutionDetail).length;

  useEffect(() => {
    dispatch(pokemonSliceActions.loadEvolutionList());
  }, []);

  useEffect(() => {
    if (evolutionList) {
      evolutionList.forEach(evolution => {
        const arr = evolution.url.split("/");
        const id = arr[arr.length - 2];
        dispatch(pokemonSliceActions.loadEvolutionDetail(id));
      });
    }
  }, [evolutionList]);

  const percent = Math.round((evolutionDetailTotal * 100) / evolutionTotal);
  if (evolutionDetailTotal < evolutionTotal) {
    return (
      <Grid container>
        <Grid item xs={12}>
          {percent}%
          <LinearProgress variant="determinate" value={percent} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
export default PokemonProvider;
