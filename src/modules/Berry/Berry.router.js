import React from "react";
import { Redirect } from "react-router-dom";
import routeHelper from "../../helpers/Route.helper";
import BerryPage from "./BerryPage";

const ROUTE_PREFIX = "/berry";

const berryUrls = {
  BerryPage: {
    path: ROUTE_PREFIX,
    component: BerryPage,
    exact: true
  }
};

export default () => routeHelper({ urls: berryUrls, withSwitch: true });
export { berryUrls };
