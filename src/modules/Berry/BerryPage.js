import React from "react";
import { Grid } from "@material-ui/core";
import BerryList from "./components/BerryList";

const BerryPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <BerryList />
      </Grid>
    </Grid>
  );
};
export default BerryPage;
