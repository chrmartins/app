require("dotenv").config();

module.exports = {
  basename: process.env.REACT_APP_BASE_NAME || "/",
  pokemonApiUrl:
    process.env.REACT_APP_POKEMON_API_URL || "https://pokeapi.co/api/v2"
};
