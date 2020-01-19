import React from "react";
import { Redirect } from "react-router-dom";
import routeHelper from "../../helpers/Route.helper";
import App from "./App";

export const appUrls = {
  App: {
    path: "/",
    component: () => App,
    exact: true
  }
};

export default () => routeHelper({ urls: appUrls, withSwitch: true });
