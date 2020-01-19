import React from "react";
import { Redirect } from "react-router-dom";
import routeHelper from "../../helpers/Route.helper";
import PokemonRouter from "../Pokemon/Pokemon.router";

export const appUrls = {
  PokemonPage: {
    path: "/",
    component: () => <Redirect to={"/pokemon"} />,
    exact: true
  },
  PokemonDetail: {
    path: "/pokemon",
    component: PokemonRouter,
    exact: false
  }
};

export default () => routeHelper({ urls: appUrls, withSwitch: true });
