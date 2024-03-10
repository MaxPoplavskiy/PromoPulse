import styles from './styles.module.scss';
import Logo from '../../assets/images/logo.png';

function Header() {
    return <div className={styles.header__container}>
        <div className={styles.header__logo_container}>
            <img className={styles.header__logo_image} src={Logo} />
            <h1 className={styles.header__logo_text}>PromoPulse</h1>
        </div>

        <div className={styles.header__items_container}> 
            <h2 className={styles.header__item}>
                Recommendations
            </h2>

            <h2 className={styles.header__item}>
                Tik Tok
            </h2>

            <h2 className={styles.header__item}>
                Instagram
            </h2>

            <h2 className={styles.header__item}>
                Statistics
            </h2>

            <h2 className={styles.header__item}>
                Home
            </h2>
        </div>
    </div>;
}

export { Header };
