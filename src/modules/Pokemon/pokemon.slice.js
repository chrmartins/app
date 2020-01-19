import { createSlice } from "@reduxjs/toolkit";
import { pokemonApi } from "../../helpers/api.helper";
import config from "../../config";

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: {
    pokemonList: [],
    pokemonDetail: {},
    evolutionDetail: {},
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
    detailPokemon: {
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
    detailEvolution: {
      reducer(state, action) {
        if (action.status === "success") {
          state.evolutionDetail[action.id] = action.payload.data;
        }
        state.loading.evolutionDetail = action.status === "pending";
      },
      prepare: id => ({
        payload: {
          promise: pokemonApi.get(`/evolution-chain/${id}`),
          id
        }
      })
    }
  }
});

export const pokemonSliceActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
