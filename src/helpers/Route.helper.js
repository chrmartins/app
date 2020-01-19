import React from "react";
import { Route, Switch } from "react-router-dom";

const mountRoutes = urls => {
  let routes = [];
  for (let key in urls) {
    const route = urls[key];

    routes.push(
      <Route
        key={key}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  }
  return routes;
};

export default ({ urls, withSwitch }) => {
  return withSwitch ? <Switch>{mountRoutes(urls)}</Switch> : mountRoutes(urls);
};
