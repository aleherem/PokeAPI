import { useNavigate, useParams } from "react-router-dom";
import Pokeball from "../assets/pokeball.png"
import Footer from "../Components/footer";
import style from "./pokemon.module.css"
import { useEffect, useState } from "react";
import { PokemonDetails } from "../Types/types";
import { fetchPokemon } from "../Api/fetchPokemon";
//import { waitFor } from "../utils/utils";
//import LoadingScreen from "../Components/LoadingScreen";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  //const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
  async function getPokemon() {
    //setIsLoading(true);
   // waitFor(1000);
    const fetchedPokemon = await fetchPokemon(name as string);
    setPokemon(fetchedPokemon);
   // setIsLoading(false);
  }
getPokemon();

},[name]);

//if(isLoading || !pokemon){
 // return <LoadingScreen />;
//}

  return( 
  <>
    <button className={style.pokeballButton}
     onClick={() => navigate(-1)}>
      <img className={style.pokeballImg} 
      src={Pokeball} 
      alt={"Pokeball"}/> 
      Go Back
    </button>
       <div className={style.pokemon}>
         <main className={style.pokemonInfo}>
            <div className={style.pokemonTittle}>
              {name?.toUpperCase()}
            </div>
            <div>N° {pokemon?.id}</div>
           <div>
              <img 
              className={style.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
            </div>
            <div>HP              : {pokemon?.hp}</div>
            <div>ATTACK          : {pokemon?.attack}</div>
            <div>DEFENSE         : {pokemon?.defense}</div>
            <div>SPECIAL ATTACK  : {pokemon?.spAtk}</div>
            <div>SPECIAL DEFENSE : {pokemon?.spDef}</div>
            <div>SPEED           : {pokemon?.spd}</div>
        </main>
      </div>
    <Footer/>
  </>
  );
};
export default Pokemon;
