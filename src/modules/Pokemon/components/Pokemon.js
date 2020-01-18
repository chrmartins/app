import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  LinearProgress
} from "@material-ui/core";
import { pokemonSliceActions } from "../pokemon.slice";

const Pokemon = ({ pokemonName }) => {
  const dispatch = useDispatch();
  const { pokemonDetail } = useSelector(state => state.pokemonSlice);
  const pokemon = pokemonDetail[pokemonName];
  // const pokemon = pokemonDetail.filter(p => p.name === pokemonName)

  useEffect(() => {
    dispatch(pokemonSliceActions.detailPokemon(pokemonName));
  }, [pokemonName]);

  return (
    <Card>
      {pokemon ? (
        <CardHeader
          avatar={<Avatar src={pokemon.sprites.front_default} />}
          title={pokemon.name}
        />
      ) : (
        <LinearProgress />
      )}
      <CardContent>Aqui vai os detalhes</CardContent>
    </Card>
  );
};

export default Pokemon;
