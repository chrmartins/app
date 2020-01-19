import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import PokemonList from "./components/PokemonList";
import { useDispatch, useSelector } from "react-redux";

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
