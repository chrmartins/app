import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Android, Apple } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { pokemonUrls } from "../../Pokemon/Pokemon.router";
import { berryUrls } from "../../Berry/Berry.router";

const useStyles = makeStyles(theme => ({
  linkItem: {
    textDecoration: "none",
    color: "#333"
  }
}));

const AppMenu = () => {
  const classes = useStyles();
  return (
    <List>
      <Link to={pokemonUrls.PokemonPage.path} className={classes.linkItem}>
        <ListItem button>
          <ListItemIcon>
            <Android />
          </ListItemIcon>
          <ListItemText primary={"Pokemons"} />
        </ListItem>
      </Link>
      <Link to={berryUrls.BerryPage.path} className={classes.linkItem}>
        <ListItem button>
          <ListItemIcon>
            <Apple />
          </ListItemIcon>
          <ListItemText primary={"Berrys"} />
        </ListItem>
      </Link>
    </List>
  );
};

export default AppMenu;
