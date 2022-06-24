import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {useContext} from 'react'
import FavoritesContext from "../../store/favourite-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext)


  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meeups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites <span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
