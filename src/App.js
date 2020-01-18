import React from "react";
import "typeface-roboto";
import { Grid } from "@material-ui/core";
import PokemonPage from "./modules/Pokemon/PokemonPage";

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <PokemonPage />
      </Grid>
    </Grid>
  );
};

export default App;
