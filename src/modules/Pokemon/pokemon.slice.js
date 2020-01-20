import { createSlice } from "@reduxjs/toolkit";
import { pokemonApi } from "../../helpers/api.helper";
import config from "../../config";

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: {
    pokemonList: [],
    pokemonDetail: {},
    evolutionDetail: {},
    evolutionList: null,
    loading: {}
  },
  reducers: {
    loadPokemonList: {
      reducer(state, action) {
        if (action.status === "success") {
          state.pokemonList = action.payload.data.results;
        }
        state.loading.pokemonList = action.status === "pending";
      },
      prepare: url => {
        let finalUrl = "/pokemon?limit=9999";
        if (url) {
          finalUrl = url.replace(config.pokemonApiUrl, "");
        }
        return {
          payload: {
            promise: pokemonApi.get(finalUrl)
          }
        };
      }
    },
    loadPokemonDetail: {
      reducer(state, action) {
        if (action.status === "success") {
          state.pokemonDetail[action.name] = action.payload.data;
        }
        state.loading.pokemonDetail = action.status === "pending";
      },
      prepare: name => ({
        payload: {
          promise: pokemonApi.get(`/pokemon/${name}`),
          name
        }
      })
    },
    loadEvolutionDetail: {
      reducer(state, action) {
        const mountEvolutions = item => {
          const theEvolution = item.evolves_to[0];
          // aproveita as evoluções do pokemon buscado para montar para os próximos
          if (theEvolution) {
            state.evolutionDetail[theEvolution.species.name] = mountEvolutions(
              theEvolution
            );
          }
          // monta as evoluções para o pokemon buscado
          return {
            name: item.species.name,
            evolves_to: theEvolution ? mountEvolutions(theEvolution) : null
          };
        };
        if (action.status === "success") {
          const evolution = action.payload.data;
          state.evolutionDetail[evolution.chain.species.name] = mountEvolutions(
            evolution.chain
          );
        }
        state.loading.evolutionDetail = action.status === "pending";
      },
      prepare: id => ({
        payload: {
          promise: pokemonApi.get(`/evolution-chain/${id}`),
          id
        }
      })
    },
    loadEvolutionList: {
      reducer(state, action) {
        if (action.status === "success") {
          state.evolutionList = action.payload.data.results;
        }
        state.loading.evolutionList = action.status === "pending";
      },
      prepare: () => ({
        payload: {
          promise: pokemonApi.get(`/evolution-chain?limit=9999`)
        }
      })
    }
  }
});

export const pokemonSliceActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
