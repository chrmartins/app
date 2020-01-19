import React from "react";
import { Redirect } from "react-router-dom";
import routeHelper from "../../helpers/Route.helper";
import PokemonPage from "../Pokemon/PokemonPage";
import PokemonDetailPage from "./PokemonDetailPage";

const ROUTE_PREFIX = "/pokemon";

const pokemonUrls = {
  PokemonPage: {
    path: ROUTE_PREFIX,
    component: PokemonPage,
    exact: true
  },
  PokemonDetail: {
    path: `${ROUTE_PREFIX}/detail/:pokemonName`,
    component: PokemonDetailPage,
    exact: true
  }
};

export default () => routeHelper({ urls: pokemonUrls, withSwitch: true });
export { pokemonUrls };
