import Pokedex from "../assets/pokedex.png"
import styles from "./LoadingScreen.module.css"

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
       <img className={styles.loadingScreenIcon} src={Pokedex} alt="Pokdedex" />
    </div>
  );
}
export default LoadingScreen
