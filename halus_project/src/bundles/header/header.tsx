import styles from './styles.module.scss';
import { FaHeartbeat } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Header() {
    return <div className={styles.header__container}>
        <div className={styles.header__logo_container}>
            <FaHeartbeat className={styles.header__logo_image} />
            <h1 className={styles.header__logo_text}>PromoPulse</h1>
        </div>

        <div className={styles.header__items_container}> 
              <NavLink className={styles.header__item} to='/'>
                Home
            </NavLink>

            <NavLink className={styles.header__item} to='/statistics'>
                Statistics
            </NavLink>

            <NavLink className={styles.header__item} to='/planner'>
                Planner
            </NavLink>

            <NavLink className={styles.header__item} to='/recommendations'>
                AI Recomendations
            </NavLink>

            <NavLink className={styles.header__item} to='/team'>
                Team
            </NavLink>


           

          
          
        </div>
    </div>;
}

export { Header };
