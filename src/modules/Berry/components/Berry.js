import React from "react";
import { Grid, Typography } from "@material-ui/core";
import BerryFlavors from "./BerryFlavors";

const Berry = ({ berryName }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">{berryName}</Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <img
          src={`https://www.serebii.net/itemdex/sprites/pgl/${berryName}berry.png`}
        />
      </Grid>
      <Grid item xs={12}>
        <BerryFlavors berryName={berryName} />
      </Grid>
    </Grid>
  );
};

export default Berry;
