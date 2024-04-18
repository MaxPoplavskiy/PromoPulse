import styles from './styles.module.scss';
import { FaHeartbeat } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { ApiRoutes } from '../common/enums/api-routes';

type BuildLinkClassProps = {
  isActive: boolean;
}

const buildLinkClass = ({ isActive }: BuildLinkClassProps): string => {
  return clsx(styles.header__item, isActive && styles.header__item__active);
};

function Header() {
    return <div className={styles.header__container}>
        <div className={styles.header__logo_container}>
            <FaHeartbeat className={styles.header__logo_image} />
            <h1 className={styles.header__logo_text}>PromoPulse</h1>
        </div>

        <div className={styles.header__items_container}> 
              <NavLink className={buildLinkClass} to={ApiRoutes.ROOT}>
                Home
            </NavLink>

            <NavLink className={buildLinkClass} to={ApiRoutes.STATISTIC}>
                Statistics
            </NavLink>

            <NavLink className={buildLinkClass} to={ApiRoutes.PLANNER}>
                Planner
            </NavLink>

            <NavLink className={buildLinkClass} to={ApiRoutes.RECOMMENDATIONS}>
                AI Recomendations
            </NavLink>

            <NavLink className={buildLinkClass} to={ApiRoutes.ACCOUNT}>
                Account
            </NavLink>

            {/* <NavLink className={buildLinkClass} to='/team'>
                Team
            </NavLink> */}


           

          
          
        </div>
    </div>;
}

export { Header };
