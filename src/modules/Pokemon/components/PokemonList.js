import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Grid, LinearProgress } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "../pokemon.slice";
import PaginationComponent from "../../../components/PaginationComponent";
import TitleComponent from "../../../components/TitleComponent";
import SearchComponent from "../../../components/SearchComponent";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemonList } = useSelector(state => state.pokemonSlice);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);
  const [limit] = useState(20);

  useEffect(() => {
    dispatch(pokemonSliceActions.loadPokemonList(null));
  }, []);

  useEffect(() => {
    setPage(0);
  }, [searchText]);

  if (!pokemonList) {
    return <LinearProgress />;
  }

  // Filtra os pokemons de acordo com o texto digitado no campo de busca
  const pokemonListFiltered = pokemonList.filter(
    pokemon => pokemon.name.indexOf(searchText) >= 0
  );

  // pega o total de páginas dividinto o total de pokemons pela quantidade que é mostrado na página
  const totalPages = pokemonListFiltered.length / limit;

  // Pega um pedaço da lista de pokemons de acordo com o total por página e a pagina atual
  // slice(posicaoAtual, posicaoFinal)
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // arr.slice(2, 6);
  // limit = 20
  // DRY - Don´t Reapeat Yourself
  const offset = page * limit;
  const pokemonListPaginated = pokemonListFiltered.slice(
    offset,
    offset + limit
  );

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleBack = () => {
    setPage(page - 1);
  };

  const handleOnChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <TitleComponent title="Lista de Pokemons" />
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <SearchComponent
              label="Buscar Pokemon"
              value={searchText}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <PaginationComponent
        totalPages={totalPages}
        page={page}
        handleNext={handleNext}
        handleBack={handleBack}
      />
      {pokemonListPaginated.map((pokemon, key) => (
        <Grid key={key} item xs={12} sm={6} md={3}>
          <PokemonCard pokemonName={pokemon.name} />
        </Grid>
      ))}
      <PaginationComponent
        totalPages={totalPages}
        page={page}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </Grid>
  );
};

export default PokemonList;
