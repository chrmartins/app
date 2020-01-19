import React from "react";
import { createBrowserHistory } from "history";
import { Grid } from "@material-ui/core";
import AppRouter from "./App.router";
import { Router } from "react-router-dom";
import config from "../../config";

const browserHistoryConfig = { basename: config.basename };

const history = createBrowserHistory(browserHistoryConfig);

const App = () => {
  return (
    <Router basename={config.basename} history={history}>
      <Grid container>
        <Grid item xs={12}>
          <AppRouter />
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
