import styles from './styles.module.scss';
import { PiTiktokLogo } from "react-icons/pi";
import Instagram from '../../assets/images/instagram.png';
import XLogo from '../../assets/images/X.png';

function Footer() {
    return <div className={styles.footer__container}>
        <PiTiktokLogo className={ styles.logo} />
        <img src={Instagram} className={ styles.logo}/>
        <img src={XLogo} className={ styles.logo}/>
    </div>;
}

export { Footer };
