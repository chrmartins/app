import React from "react";
import routeHelper from "../../helpers/Route.helper";
import BerryPage from "./BerryPage";
import BerryProvider from "./BerryProvider";

const ROUTE_PREFIX = "/berry";

const berryUrls = {
  BerryPage: {
    path: ROUTE_PREFIX,
    component: BerryPage,
    exact: true
  }
};

const BerryRouter = () => {
  return (
    <BerryProvider>
      {routeHelper({ urls: berryUrls, withSwitch: true })}
    </BerryProvider>
  );
};

export default BerryRouter;
export { berryUrls };
