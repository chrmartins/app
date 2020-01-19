import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "typeface-roboto";
import "./index.css";
import App from "./modules/App/App";
import storeHelper from "./store/store.helper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import customTheme from "./constants/customTheme.constant";

const theme = createMuiTheme(customTheme);

ReactDOM.render(
  <Provider store={storeHelper}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
