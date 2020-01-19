import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

const TitleComponent = ({ title }) => {
  return (
    <Grid item xs={12}>
      <Grid item xs={12} style={{ marginBottom: 16 }}>
        <Typography variant="h4">{title}</Typography>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default TitleComponent;
