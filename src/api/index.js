import fetch from "unfetch";

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const error = new Error("Fetch error");
    error.response = response;
    error.status = response.status;
    return Promise.reject(error);
  }
}

export const getPokemons = async () => {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon");
  const response = await checkStatus(request);
  return response.json();
};
