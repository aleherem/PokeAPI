import { Link } from "react-router-dom";
import styles from "./footers.module.css"

//Assets
import PikachuPic from "../assets/pikachu.png"
import LocationPic from "../assets/pointer.png"
import ItemsPic from "../assets/pokeball.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.footerLink}
       to="/pokemons">
        <img className={styles.footerIcon} 
        src={PikachuPic} alt="Pokeball"/>
            Pokemons
      </Link>
      <Link className={styles.footerLink} 
      to="/items">
        <img className={styles.footerIcon} 
        src={ItemsPic} alt="Pokeball"/>
            Item
      </Link>
      <Link  className={styles.footerLink} 
      to="/pokemons">
        <img className={styles.footerIcon} 
        src={LocationPic} alt="Pokeball"/>
            Map
      </Link>
    </footer>
    )
}
export default Footer