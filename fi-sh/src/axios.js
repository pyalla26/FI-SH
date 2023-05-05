import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//API:1bbdfb16ce841c8a5291db133c015819
