import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import TitleComponent from "../../../components/TitleComponent";

const BerryFlavors = ({ berryName }) => {
  const { berryList, berryDetail } = useSelector(state => state.berrySlice);
  const berry = berryDetail[berryName];

  if (!berry) {
    return <LinearProgress />;
  }
  const flavors = berry.flavors;
  // const colors = {
  //   spicy: "#f44336",
  //   dry: "#3f51b5",
  //   sweet: "#e91e63",
  //   bitter: "#795548",
  //   sour: "#4caf50"
  // };

  return (
    <Grid container>
      <Grid item xs={12}>
        {flavors.map((item, key) => {
          const percent = Math.round((item.potency * 100) / 40);
          return (
            <Fragment key={key}>
              <Typography variant="body1">{item.flavor.name}</Typography>
              <LinearProgress
                size={24}
                thickness={4}
                // style={{ color: colors[item.flavor.name] }}
                variant="determinate"
                value={percent}
              />
            </Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default BerryFlavors;
