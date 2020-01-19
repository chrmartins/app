import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  LinearProgress,
  Button,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { pokemonSliceActions } from "../pokemon.slice";
import { pokemonUrls } from "../Pokemon.router";
import Pokemon from "./Pokemon";

const useStyles = makeStyles(theme => ({
  linkItem: {
    textDecoration: "none"
  },
  cardBackground: {
    backgroundColor: theme.palette.primary.light
  }
}));

const PokemonCard = ({ pokemonName }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.cardBackground}>
      <CardContent>
        <Pokemon pokemonName={pokemonName} />
      </CardContent>
      <CardActions>
        <Link
          className={classes.linkItem}
          to={pokemonUrls.PokemonDetail.path.replace(
            ":pokemonName",
            pokemonName
          )}
        >
          <Button variant="contained" color="secondary">
            Detalhar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
