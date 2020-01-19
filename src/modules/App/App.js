import React from "react";
import { createBrowserHistory } from "history";
import { Grid } from "@material-ui/core";
import AppRouter from "./App.router";
import { Router } from "react-router-dom";
import config from "../../config";
import AppLayout from "./components/AppLayout";

const browserHistoryConfig = { basename: config.basename };

const history = createBrowserHistory(browserHistoryConfig);

const App = () => {
  return (
    <Router basename={config.basename} history={history}>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </Router>
  );
};

export default App;
