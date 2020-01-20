import React from "react";
import { Grid } from "@material-ui/core";
import PokemonList from "./components/PokemonList";

const PokemonPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <PokemonList />
      </Grid>
    </Grid>
  );
};
export default PokemonPage;
