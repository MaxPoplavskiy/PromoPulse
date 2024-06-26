import styles from './styles.module.css';
import { FaHeartbeat } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { AppRoutes } from '../common/enums/app-routes.enum';
import { useContext } from 'react';
import { userContext } from '../auth/context/user-context';

type BuildLinkClassProps = {
  isActive: boolean;
}

const buildLinkClass = ({ isActive }: BuildLinkClassProps): string => {
  return clsx(styles.header__item, isActive && styles.header__item__active);
};

function Header() {
    const userContextValue = useContext(userContext);

    return <div className={styles.header__container}>
        <div className={styles.header__logo_container}>
            <FaHeartbeat className={styles.header__logo_image} />
            <h1 className={styles.header__logo_text}>PromoPulse</h1>
        </div>

        <div className={styles.header__items_container}> 
            <NavLink className={buildLinkClass} to={AppRoutes.ROOT}>
                Home
            </NavLink>

            {userContextValue?.user ?<>
                    <NavLink className={buildLinkClass} to={AppRoutes.STATISTIC}>
                        Statistics
                    </NavLink>
        
                    <NavLink className={buildLinkClass} to={AppRoutes.PLANNER}>
                        Planner
                    </NavLink>
        
                    <NavLink className={buildLinkClass} to={AppRoutes.RECOMMENDATIONS}>
                        PromoPulse AI
                    </NavLink>

                    <NavLink className={buildLinkClass} to={AppRoutes.ACCOUNT}>
                        Account
                    </NavLink>
            </>
            : 
            <>
                <NavLink className={buildLinkClass} to={AppRoutes.SIGN_IN}>
                    Sign In
                </NavLink>

                <NavLink className={buildLinkClass} to={AppRoutes.SIGN_UP}>
                    Sign up
                </NavLink>
            </>}
            

            {/* <NavLink className={buildLinkClass} to='/team'>
                Team
            </NavLink> */}


           

          
          
        </div>
    </div>;
}

export { Header };
