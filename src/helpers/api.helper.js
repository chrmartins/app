import axios from "axios";
import config from "../config";

const apiHelper = baseUrl => {
  let create = axios.create({
    baseURL: baseUrl
    // withCredentials: true
  });

  create.interceptors.request.use(
    request => request,
    error => {
      error.msg = "Erro ao tentar enviar dados.";
      console.error(error.msg, error, error.request);
      return Promise.reject(error);
    }
  );

  create.interceptors.response.use(
    response => response,
    error => {
      const response = error.response;
      error.msg =
        response && response.data
          ? response.data.msg
          : "Erro ao tentar receber dados.";
      console.error(error.msg, error, error.response);
      return Promise.reject(error);
    }
  );

  return create;
};

const pokemonApi = apiHelper(config.pokemonApiUrl);

export default apiHelper;
export { pokemonApi };
