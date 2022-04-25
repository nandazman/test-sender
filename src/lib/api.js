import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create({
  // withCredentials: true, for token
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

async function fetchAPI(endpoint) {
  const headers = { "Content-Type": "application/json" };

  // adjust this based on API response or to handle error handling
  const response = await instance.get(endpoint, { headers });
  return response.data;
}

export function getPokemonIvysaur() {
  return fetchAPI("/pokemon/ivysaur");
}
