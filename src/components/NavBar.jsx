import { Link} from 'react-router-dom';
import { Context } from './Context'; 
import { useContext } from 'react';
import Styles from '../styles/NavBar.module.css'; 


function NavBar() {
  const { selectedUserId} = useContext(Context);
  console.log('selectedUserIdCONTEXT:', selectedUserId)

  return (
    <section>
      <div className={Styles.horizontal}>
        <article className={Styles.logo}>
          <div>
            {/* chemin d'accès statique aux fichiers à partir du dossier /public*/}
          <img src={process.env.PUBLIC_URL + '/assets/Logo.svg'} alt="Logo sportSee" />
          <img src={process.env.PUBLIC_URL + '/assets/sportsee.svg'} alt="SportSee" />
          </div>
        </article>
        <nav className={Styles.navHorizontal}>
          <Link to="/accueil">Accueil</Link>
          <Link to={`/user/${selectedUserId}`}>Profil</Link>
          <Link to="/settings">Réglages</Link>
          <Link to="/community">Communauté</Link>
        </nav>
      </div>
      <div className={Styles.vertical}>
        <nav className={Styles.navVertical}>
          <Link><img src={process.env.PUBLIC_URL + '/assets/icon-zen.svg'} alt="Yoga" /></Link>
          <Link><img src={process.env.PUBLIC_URL + '/assets/icon-swim.svg'} alt="Piscine" /></Link>
          <Link><img src={process.env.PUBLIC_URL + '/assets/icon-bike.svg'} alt="Vélo" /></Link>
          <Link><img src={process.env.PUBLIC_URL + '/assets/icon-alter.svg'} alt="Poids et haltères" /></Link>
        </nav>
        <p>Copiryght, SportSee 2020</p>
      </div>
    </section>
  );
}

export default NavBar;
