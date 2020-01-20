import React from "react";
import routeHelper from "../../helpers/Route.helper";
import PokemonPage from "../Pokemon/PokemonPage";
import PokemonDetailPage from "./PokemonDetailPage";
import PokemonProvider from "./PokemonProvider";

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

const PokemonRouter = () => {
  return (
    <PokemonProvider>
      {routeHelper({ urls: pokemonUrls, withSwitch: true })}
    </PokemonProvider>
  );
};

export default PokemonRouter;
export { pokemonUrls };
