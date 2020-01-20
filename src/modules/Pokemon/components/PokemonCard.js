import React from "react";
import {
  Grid,
  Card,
  CardActions,
  Button,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { pokemonUrls } from "../Pokemon.router";
import Pokemon from "./Pokemon";

const useStyles = makeStyles(theme => ({
  linkItem: {
    textDecoration: "none"
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    color: "#fff"
  }
}));

const PokemonCard = ({ pokemonName, showActions = true, children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Pokemon pokemonName={pokemonName} />
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </CardContent>
      {showActions && (
        <CardActions style={{ textAlign: "center" }}>
          <Link
            className={classes.linkItem}
            to={pokemonUrls.PokemonDetail.path.replace(
              ":pokemonName",
              pokemonName
            )}
          >
            <Button color="secondary">Detalhar</Button>
          </Link>
        </CardActions>
      )}
    </Card>
  );
};

export default PokemonCard;
