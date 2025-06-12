import Logo from "../../assets/images/logo.png";
import "./styles.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="SportSee logo" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/settings">Réglage</Link>
          </li>
          <li>
            <Link to="/community">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
