import { createSlice } from "@reduxjs/toolkit";
import { pokemonApi } from "../../helpers/api.helper";

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: {
    pokemonList: [],
    loading: {}
  },
  reducers: {
    loadPokemon: {
      reducer(state, action) {
        if (action.status === "success") {
          state.pokemonList = action.payload.data;
        }
        state.loading.pokemonList = action.status === "pending";
      },
      prepare: () => ({
        payload: {
          promise: pokemonApi.get("/pokemon")
        }
      })
    }
  }
});

export const pokemonSliceActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
