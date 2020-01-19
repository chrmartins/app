import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import {
  Grid,
  Button,
  LinearProgress,
  MobileStepper,
  Paper,
  IconButton,
  InputBase,
  TextField,
  InputAdornment,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import {
  ArrowForward,
  ArrowBack,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Search
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { pokemonSliceActions } from "../pokemon.slice";
import { POKEMON_ID_BY_NAME } from "../pokemon.constant";
import PaginationComponent from "../../../components/PaginationComponent";
import TitleComponent from "../../../components/TitleComponent";

const PokemonList = () => {
  const dispatch = useDispatch();
  // const pokemonList = Object.values(POKEMON_ID_BY_NAME);
  const { pokemonList } = useSelector(state => state.pokemonSlice);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    dispatch(pokemonSliceActions.loadPokemonList(null));
  }, []);

  useEffect(() => {
    setPage(0);
  }, [searchText]);

  if (!pokemonList) {
    return <LinearProgress />;
  }
  const pokemonListFiltered = pokemonList.filter(
    pokemon => pokemon.name.indexOf(searchText) >= 0
  );
  const totalPages = pokemonListFiltered.length / limit;
  const pokemonListPaginated = pokemonListFiltered.slice(page, page + limit);

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
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="search-pokemon">
                Buscar Pokemon
              </InputLabel>
              <Input
                id="search-pokemon"
                fullWidth
                value={searchText}
                onChange={handleOnChange}
                endAdornment={
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
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
