import { createSlice } from "@reduxjs/toolkit";
import { pokemonApi } from "../../helpers/api.helper";
import config from "../../config";

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: {
    pokemonList: [],
    pokemonDetail: {},
    // pokemonDetail: [],
    loading: {}
  },
  reducers: {
    loadPokemonList: {
      reducer(state, action) {
        if (action.status === "success") {
          state.pokemonList = action.payload.data;
        }
        state.loading.pokemonList = action.status === "pending";
      },
      prepare: url => {
        let finalUrl = "/pokemon";
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
          // state.pokemonDetail.push(action.payload.data) ;
        }
        state.loading.pokemonDetail = action.status === "pending";
      },
      prepare: name => ({
        payload: {
          promise: pokemonApi.get(`/pokemon/${name}`),
          name
        }
      })
    }
  }
});

export const pokemonSliceActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
