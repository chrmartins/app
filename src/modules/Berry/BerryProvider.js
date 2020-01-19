import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, LinearProgress } from "@material-ui/core";
import { berrySliceActions } from "./berry.slice";

const BerryProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { berryList, berryDetail } = useSelector(state => state.berrySlice);
  const berryTotal = berryList ? berryList.length : 0;
  const berryDetailTotal = Object.values(berryDetail).length;

  useEffect(() => {
    dispatch(berrySliceActions.loadBerryList());
  }, []);

  useEffect(() => {
    if (berryList) {
      berryList.forEach(berry => {
        dispatch(berrySliceActions.loadBerryDetail(berry.name));
      });
    }
  }, [berryList]);

  const percent = Math.round((berryDetailTotal * 100) / berryTotal);
  if (berryDetailTotal < berryTotal) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <LinearProgress variant="determinate" value={percent} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
export default BerryProvider;
