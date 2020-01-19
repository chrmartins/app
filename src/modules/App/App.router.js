import React from "react";
import { Redirect } from "react-router-dom";
import routeHelper from "../../helpers/Route.helper";
import PokemonRouter from "../Pokemon/Pokemon.router";
import BerryRouter from "../Berry/Berry.router";

export const appUrls = {
  PokemonPage: {
    path: "/",
    component: () => <Redirect to={"/pokemon"} />,
    exact: true
  },
  PokemonRouter: {
    path: "/pokemon",
    component: PokemonRouter,
    exact: false
  },
  BerryRouter: {
    path: "/berry",
    component: BerryRouter,
    exact: false
  }
};

export default () => routeHelper({ urls: appUrls, withSwitch: true });
