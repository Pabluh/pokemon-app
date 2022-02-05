import { useQuery } from "react-query"
import { api } from "./services/api"

interface PokemonPros {
  name: string;
}

function App() {
  const { data, isLoading, isError } = useQuery("pokemons", async () => {
    const { data } = await api.get('pokemon')

    const pokemons = data.results.map((pokemon: PokemonPros) => {
      return {
        name: pokemon.name
      }
    })

    return pokemons
  }, {
    staleTime: 1000 * 5
  });

  const PokemonCard = (pokemons: PokemonPros[]) => {
    return pokemons.map((pokemon: PokemonPros) => {
      return (
        <div key={pokemon.name}>
          Name: {pokemon.name}
        </div>
      )
    })
  }

  return (
    <>
      <div>
        {isLoading ? (
          <div>Loading...</div>
          ) : isError ? (
            <div>Error fetching pokemons</div>
          ) : (
            <div>{PokemonCard(data)}</div>
          )
        }
      </div>
    </>
  )
}

export default App