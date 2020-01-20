import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
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

const AppMenu = ({ onClick }) => {
  const classes = useStyles();
  return (
    <List>
      <Link
        onClick={onClick}
        to={pokemonUrls.PokemonPage.path}
        className={classes.linkItem}
      >
        <ListItem button>
          {/* <ListItemIcon style={{ color: "#fff" }}>
            <Android />
          </ListItemIcon> */}
          <ListItemText style={{ color: "#fff" }} primary={"Pokemons"} />
        </ListItem>
      </Link>
      <Link
        onClick={onClick}
        to={berryUrls.BerryPage.path}
        className={classes.linkItem}
      >
        <ListItem button>
          {/* <ListItemIcon style={{ color: "#fff" }}>
            <Apple />
          </ListItemIcon> */}
          <ListItemText style={{ color: "#fff" }} primary={"Berrys"} />
        </ListItem>
      </Link>
    </List>
  );
};

export default AppMenu;
