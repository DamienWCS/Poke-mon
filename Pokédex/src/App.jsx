import PokemonCard from "./components/PokemonCard";

const pokemonData = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  return (
    <div>
      <PokemonCard pokemon={pokemonData[0]} />
    </div>
  );
};

export default App;
