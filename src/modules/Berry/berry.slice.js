import { createSlice } from "@reduxjs/toolkit";
import { pokemonApi } from "../../helpers/api.helper";
import config from "../../config";

const berrySlice = createSlice({
  name: "berrySlice",
  initialState: {
    berryList: null,
    berryDetail: {},
    loading: {}
  },
  reducers: {
    loadBerryList: {
      reducer(state, action) {
        if (action.status === "success") {
          state.berryList = action.payload.data.results;
        }
        state.loading.berryList = action.status === "pending";
      },
      prepare: () => {
        return {
          payload: {
            promise: pokemonApi.get("/berry?limit=9999")
          }
        };
      }
    },
    loadBerryDetail: {
      reducer(state, action) {
        if (action.status === "success") {
          state.berryDetail[action.berryName] = action.payload.data;
        }
        state.loading.berryDetail = action.status === "pending";
      },
      prepare: berryName => {
        return {
          payload: {
            promise: pokemonApi.get(`/berry/${berryName}`),
            berryName
          }
        };
      }
    }
  }
});

export const berrySliceActions = berrySlice.actions;

export default berrySlice.reducer;
