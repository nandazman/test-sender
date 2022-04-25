const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
async function fetchAPI(endpoint) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(`${baseURL}${endpoint}`, {
    method: "GET",
    headers,
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json;
}

export function getPokemonDitto() {
  return fetchAPI("/pokemon/ditto");
}
