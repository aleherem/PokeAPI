import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchPokemons } from "../Api/fetchPokemons"
import Footer from "../Components/footer"
import Headers from "../Components/Headers"

import { Pokemon } from "../Types/types"
import styles from "./pokemons.module.css"
import LoadingScreen from "../Components/LoadingScreen"
import { waitFor } from "../utils/utils"

const Pokemons = () => {
  const [isloading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(1000)
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    };
    fetchAllPokemons();
  },[]);

    if(isloading || !pokemons){
      return <LoadingScreen />
    }

  const filteredPokemons =  pokemons?.slice(0, 152).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase())
})

  return(
    <>
    <Headers query={query} setQuery={setQuery}/>
    <main>
      <nav>
        {filteredPokemons?.slice(0, 152).map((pokemon) => (
                <Link 
                  key={pokemon.id}
                  className={styles.listItem}
                  to={`/pokemon/${pokemon.name.toLowerCase()}`}>
                  <img 
                    className={styles.listItemIcon} 
                    src={pokemon.imgSrc}
                    alt={pokemon.name}
                  />
                  <div className={styles.listItemText}>
                    <span>{pokemon.name}</span>
                    <span>{pokemon.id}</span>
                  </div>
                </Link>
        ))}
      </nav>
    </main>
    <Footer/>
    </>
  );
};
export default Pokemons