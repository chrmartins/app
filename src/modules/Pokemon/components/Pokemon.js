import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  LinearProgress,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { pokemonSliceActions } from "../pokemon.slice";
import { pokemonUrls } from "../Pokemon.router";

const useStyles = makeStyles(theme => ({
  linkItem: {
    textDecoration: "none"
  },
  cardBackground: {
    backgroundColor: theme.palette.primary.light
  }
}));

const Pokemon = ({ pokemonName }) => {
  const classes = useStyles();
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
    <Grid container>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h5">{pokemon.name}</Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <img src={pokemon.sprites.front_default} />
      </Grid>
    </Grid>
  );
};

export default Pokemon;
