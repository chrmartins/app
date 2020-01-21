import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, LinearProgress } from "@material-ui/core";
import { pokemonSliceActions } from "./pokemon.slice";

const PokemonProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { evolutionList, evolutionDetail } = useSelector(
    state => state.pokemonSlice
  );
  const evolutionTotal = evolutionList ? evolutionList.length : 0;
  const evolutionDetailTotal = Object.values(evolutionDetail).length;

  useEffect(() => {
    dispatch(pokemonSliceActions.loadEvolutionList());
  }, []);

  useEffect(() => {
    if (evolutionList) {
      evolutionList.forEach(evolution => {
        const arr = evolution.url.split("/");
        const id = arr[arr.length - 2];
        dispatch(pokemonSliceActions.loadEvolutionDetail(id));
      });
    }
  }, [evolutionList]);

  /**
  Como não foi achado o id do pokemon que é utilizado para buscar as evoluções
  De alguma forma o ID que está na documentação da Evolução é diferente do que aparece
  no detalhamento do Pokemon
  Foi buscado todas de uma vez o que acabou gerando uma sobre carga
  O ideal é tentar achar na API ou caso não exista utilizar algum cache, ex.: localStorage
   */
  const percent = Math.round((evolutionDetailTotal * 100) / evolutionTotal);
  const evolutionsDetailIsReady = evolutionDetailTotal < evolutionTotal;
  if (evolutionsDetailIsReady) {
    return (
      <Grid container>
        <Grid item xs={12}>
          {percent}%
          <LinearProgress variant="determinate" value={percent} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};
export default PokemonProvider;
