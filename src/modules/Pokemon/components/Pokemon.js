import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  LinearProgress,
  Button
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
  // const pokemon = pokemonDetail.filter(p => p.name === pokemonName)

  useEffect(() => {
    dispatch(pokemonSliceActions.detailPokemon(pokemonName));
  }, [pokemonName]);

  return (
    <Card className={classes.cardBackground}>
      {pokemon ? (
        <CardHeader
          avatar={<Avatar src={pokemon.sprites.front_default} />}
          title={pokemon.name}
        />
      ) : (
        <LinearProgress />
      )}
      <CardActions>
        <Link className={classes.linkItem} to={pokemonUrls.PokemonDetail.path}>
          <Button variant="contained" color="secondary">
            Detalhar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Pokemon;
