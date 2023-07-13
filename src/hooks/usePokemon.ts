export const usePokemon = () => {
  const getPokemonList = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon");
  };

  return {
    getPokemonList,
  };
};
